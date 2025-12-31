import { Router } from 'express';
import { submitApplication, getApplications } from '../controllers/volunteer.controller';
import { validateVolunteerApplication } from '../middleware/validators';
import { authenticateToken } from '../middleware/auth.middleware';

const router = Router();

// Public: Apply
router.post('/', validateVolunteerApplication, submitApplication);

// Protected: View applications
router.get('/', authenticateToken, getApplications);

export default router;
