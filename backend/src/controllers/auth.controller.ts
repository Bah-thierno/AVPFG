import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email et mot de passe requis' });
        }

        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
            return res.status(401).json({ message: 'Identifiants incorrects' });
        }

        const isValid = await bcrypt.compare(password, user.passwordHash);

        if (!isValid) {
            return res.status(401).json({ message: 'Identifiants incorrects' });
        }

        const token = jwt.sign(
            { userId: user.id, role: user.role, cityId: user.cityId },
            process.env.JWT_SECRET as string,
            { expiresIn: '24h' }
        );

        res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                role: user.role,
                cityId: user.cityId
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

export const register = async (req: Request, res: Response) => {
    // Only for initial setup or explicit admin creation
    try {
        const { email, password, role, cityId } = req.body;

        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'Cet email est déjà utilisé' });
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                email,
                passwordHash,
                role: role || 'CITY_MANAGER',
                cityId
            }
        });

        res.status(201).json({ message: 'Utilisateur créé', userId: newUser.id });
    } catch (error) {
        console.error('Register error:', error);
        res.status(500).json({ message: 'Erreur création utilisateur' });
    }
};
