import { Router } from 'express';
import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';
import { authenticateToken } from '../middleware/auth.js';
const router = Router();
// Public auth routes (e.g., login)
router.use('/auth', authRoutes);
// Protected API routes (all routes under /api require authentication)
router.use('/api', authenticateToken, apiRoutes);
export default router;
