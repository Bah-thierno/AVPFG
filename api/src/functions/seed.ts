import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { connectToDatabase } from "../lib/database";
import * as bcrypt from "bcryptjs";

export async function seed(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Seeding database...`);

    try {
        const db = await connectToDatabase();
        const users = db.collection('users');

        const existingAdmin = await users.findOne({ email: "admin@guineepropre.gn" });

        if (existingAdmin) {
            return {
                status: 200,
                jsonBody: { message: "Admin user already exists" }
            };
        }

        // Hash user password "Bah2025"
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash("Bah2025", salt);

        await users.insertOne({
            email: "oum123d@gmail.com",
            passwordHash,
            role: "super_admin",
            fullName: "Super Administrateur",
            createdAt: new Date()
        });

        return {
            status: 201,
            jsonBody: { message: "Admin user created successfully. Email: oum123d@gmail.com" }
        };

    } catch (error) {
        context.error(`Seed error: ${error}`);
        return {
            status: 500,
            jsonBody: { message: "Error seeding database" }
        };
    }
}

app.http('seed', {
    methods: ['POST', 'GET'],
    authLevel: 'function', // In production, this should be secured
    handler: seed
});
