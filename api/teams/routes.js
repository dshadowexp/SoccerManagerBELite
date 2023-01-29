import { Router } from "express";

import { authenticationMiddleware } from './../../middleware/auth.js';
import { getTeamHandler, updateTeamHandler } from './controller.js';

const router = Router()

/**
 * 
 * @openapi
 * '/api/players':
 *  get:
 *     tags:
 *     - Players
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
router.get('/', authenticationMiddleware, getTeamHandler);

/**
 * 
 * @openapi
 * '/api/players':
 *  get:
 *     tags:
 *     - Players
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
router.post('/:id', authenticationMiddleware, updateTeamHandler);

export default router;