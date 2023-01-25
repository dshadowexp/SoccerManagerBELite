import { Router } from 'express';
import { createUserHandler, getUserHandler } from './controller.js';

const router = Router();

/**
 * 
 * @openapi
 * '/api/users':
 *  get:
 *     tags:
 *     - Users
 *     summary: Get registered user
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateUserResponse'
 *       400:
 *         description: Bad Request
 *       501:
 *         description: Unauthorized
 *       
 */
router.get('/', getUserHandler)

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
router.post('/', createUserHandler)

export default router;