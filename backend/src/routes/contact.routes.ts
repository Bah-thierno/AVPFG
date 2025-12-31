import { Router } from 'express';
import { submitContact, getContacts } from '../controllers/contact.controller';
import { authenticateToken } from '../middleware/auth.middleware';

const router = Router();

// Public: Submit form
router.post('/', submitContact);

// Protected: View messages
router.get('/', authenticateToken, getContacts);

export default router;
