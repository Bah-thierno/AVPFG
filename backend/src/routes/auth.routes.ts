import { Router } from 'express';
import { login, register } from '../controllers/auth.controller';
import { authenticateToken, requireSuperAdmin } from '../middleware/auth.middleware';

const router = Router();

router.post('/login', login);

// Protect registration - only Super Admins can create new users (or for dev/seed)
router.post('/register', authenticateToken, requireSuperAdmin, register);

export default router;
