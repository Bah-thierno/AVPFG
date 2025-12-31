import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const validateLogin = [
  body('email').isEmail().withMessage('Email invalide'),
  body('password').isLength({ min: 6 }).withMessage('Mot de passe requis (min 6 caractères)'),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  },
];

export const validateRegister = [
  body('email').isEmail().withMessage('Email invalide'),
  body('password').isLength({ min: 6 }).withMessage('Mot de passe requis (min 6 caractères)'),
  body('role').optional().isIn(['SUPER_ADMIN','CITY_MANAGER']).withMessage('Role invalide'),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  },
];

export const validateContact = [
  body('name').notEmpty().withMessage('Nom requis'),
  body('email').isEmail().withMessage('Email invalide'),
  body('message').notEmpty().withMessage('Message requis'),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  },
];

export const validateVolunteerApplication = [
  body('name').notEmpty().withMessage('Nom requis'),
  body('email').isEmail().withMessage('Email invalide'),
  body('cityId').notEmpty().withMessage('Ville requise'),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  },
];

export const validateCreateUser = [
  body('name').notEmpty().withMessage('Nom requis'),
  body('matricule').notEmpty().withMessage('Matricule requis'),
  body('cityId').notEmpty().withMessage('Ville requise'),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  },
];
