import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { connectToDatabase } from "../lib/database";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

export async function login(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Login attempt processing`);

    try {
        const body = await request.json() as any;
        const { email, password } = body;

        if (!email || !password) {
            return {
                status: 400,
                jsonBody: { message: "Email et mot de passe requis" }
            };
        }

        const db = await connectToDatabase();
        const users = db.collection('users');

        const user = await users.findOne({ email });

        if (!user) {
            return {
                status: 401,
                jsonBody: { message: "Identifiants invalides" }
            };
        }

        const isValid = await bcrypt.compare(password, user.passwordHash);

        if (!isValid) {
            return {
                status: 401,
                jsonBody: { message: "Identifiants invalides" }
            };
        }

        // Create token
        const token = jwt.sign(
            {
                userId: user._id,
                role: user.role,
                cityId: user.cityId
            },
            process.env.JWT_SECRET || "fallback_secret_dev_only",
            { expiresIn: '24h' }
        );

        return {
            status: 200,
            jsonBody: {
                token,
                user: {
                    id: user._id,
                    email: user.email,
                    role: user.role,
                    cityId: user.cityId
                }
            }
        };

    } catch (error) {
        context.error(`Login error: ${error}`);
        return {
            status: 500,
            jsonBody: { message: "Erreur serveur interne" }
        };
    }
}

app.http('login', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: login
});
