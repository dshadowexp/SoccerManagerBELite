import { Router } from 'express';

import asyncErrorHandler from './../../middleware/async.js';
import { createUserHandler } from './controller.js';

const router = Router();

/**
 * 
 * @openapi
 * '/api/users':
 *  post:
 *     tags:
 *     - Users
 *     summary: Register a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateUserInput'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateUserResponse'
 *       409:
 *         description: Conflict
 *       400:
 *         description: Bad request
 */
router.post('/', asyncErrorHandler(createUserHandler));

export default router;