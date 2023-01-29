import { Router } from "express";
import { authenticationMiddleware } from './../../middleware/auth.js';
import { updatePlayerHandler } from './controller.js';

const router = Router();

router.post('/:id', authenticationMiddleware, updatePlayerHandler)

export default router;