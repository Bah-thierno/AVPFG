import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
    userId: string;
    role: string;
    cityId?: string;
}

declare global {
    namespace Express {
        interface Request {
            user?: UserPayload;
        }
    }
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Accès refusé. Token manquant.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as UserPayload;
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403).json({ message: 'Token invalide ou expiré.' });
    }
};

export const requireSuperAdmin = (req: Request, res: Response, next: NextFunction) => {
    if (req.user?.role !== 'SUPER_ADMIN') {
        return res.status(403).json({ message: 'Accès réservé aux Super Administrateurs.' });
    }
    next();
};
