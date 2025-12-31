import { Router } from 'express';
import { submitContact, getContacts } from '../controllers/contact.controller';
import { validateContact } from '../middleware/validators';
import { authenticateToken } from '../middleware/auth.middleware';

const router = Router();

// Public: Submit form
router.post('/', validateContact, submitContact);

// Protected: View messages
router.get('/', authenticateToken, getContacts);

export default router;
