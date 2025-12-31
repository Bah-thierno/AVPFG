import { Router } from 'express';
import { submitApplication, getApplications } from '../controllers/volunteer.controller';
import { authenticateToken } from '../middleware/auth.middleware';

const router = Router();

// Public: Apply
router.post('/', submitApplication);

// Protected: View applications
router.get('/', authenticateToken, getApplications);

export default router;
