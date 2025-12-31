import { Router } from 'express';
import { login, register, initAdmin } from '../controllers/auth.controller';
import { validateLogin, validateRegister } from '../middleware/validators';
import { authenticateToken, requireSuperAdmin } from '../middleware/auth.middleware';

const router = Router();

router.post('/login', validateLogin, login);

// Protect registration - only Super Admins can create new users (or for dev/seed)
router.post('/register', authenticateToken, requireSuperAdmin, validateRegister, register);

// Initial admin creation protected by INIT_TOKEN env variable
router.post('/init', initAdmin);

export default router;
