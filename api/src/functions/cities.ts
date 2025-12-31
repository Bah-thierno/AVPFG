import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { connectToDatabase } from "../lib/database";
import { verifyToken } from "../lib/auth";
import { ObjectId } from "mongodb";

export async function cities(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    const method = request.method;
    const db = await connectToDatabase();
    const citiesCollection = db.collection('cities');

    // GET - Public Read
    if (method === 'GET') {
        const cities = await citiesCollection.find({}).toArray();
        return {
            status: 200,
            jsonBody: cities
        };
    }

    // Protected Routes (POST, PUT, DELETE)
    const user = await verifyToken(request);
    if (!user) {
        return { status: 401, jsonBody: { message: "Non autorisé" } };
    }

    // POST - Create City (Super Admin only)
    if (method === 'POST') {
        if (user.role !== 'super_admin') {
            return { status: 403, jsonBody: { message: "Accès refusé" } };
        }

        const body = await request.json() as any;
        const newCity = { ...body, createdAt: new Date() }; // Add validation schema later

        await citiesCollection.insertOne(newCity);

        return {
            status: 201,
            jsonBody: { message: "Ville créée avec succès", city: newCity }
        };
    }

    // PUT - Update City (Super Admin or City Manager)
    if (method === 'PUT') {
        const id = request.query.get('id');
        if (!id) return { status: 400, jsonBody: { message: "ID manquant" } };

        // Access Control: Super Admin or Manager of THIS city
        if (user.role !== 'super_admin' && user.cityId !== id) {
            return { status: 403, jsonBody: { message: "Vous ne pouvez gérer que votre propre ville" } };
        }

        const body = await request.json() as any;
        delete body._id; // Prevent updating ID

        await citiesCollection.updateOne(
            { _id: new ObjectId(id) },
            { $set: { ...body, updatedAt: new Date() } }
        );

        return {
            status: 200,
            jsonBody: { message: "Ville mise à jour" }
        };
    }

    return { status: 405, jsonBody: { message: "Méthode non autorisée" } };
}

app.http('cities', {
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    authLevel: 'anonymous',
    handler: cities
});
