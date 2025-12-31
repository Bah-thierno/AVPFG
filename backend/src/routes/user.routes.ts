import { Router } from 'express';
import { getUsers, createUser } from '../controllers/user.controller';
import { authenticateToken, requireSuperAdmin } from '../middleware/auth.middleware';
import { validateCreateUser } from '../middleware/validators';

const router = Router();

// Public route for Community page
router.get('/', getUsers);

// Protected: Create new member manually
router.post('/', authenticateToken, requireSuperAdmin, validateCreateUser, createUser);

export default router;
