import { Router } from "express";

import { authenticationMiddleware } from './../../middleware/auth.js';
import { updateTeamHandler } from './controller.js';

const router = Router()

router.post('/:id', authenticationMiddleware, updateTeamHandler);

export default router;