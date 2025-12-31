import { Router } from 'express';
import { getUsers, createUser } from '../controllers/user.controller';
import { authenticateToken, requireSuperAdmin } from '../middleware/auth.middleware';

const router = Router();

// Public route for Community page
router.get('/', getUsers);

// Protected: Create new member manually
router.post('/', authenticateToken, requireSuperAdmin, createUser);

export default router;
