import { HttpRequest, InvocationContext } from "@azure/functions";
import * as jwt from "jsonwebtoken";

interface UserPayload {
    userId: string;
    role: string;
    cityId?: string;
}

export type AuthenticatedRequest = HttpRequest & {
    user?: UserPayload;
};

export async function verifyToken(request: HttpRequest): Promise<UserPayload | null> {
    const authHeader = request.headers.get('Authorization');

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return null;
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "fallback_secret_dev_only") as UserPayload;
        return decoded;
    } catch (error) {
        return null;
    }
}
