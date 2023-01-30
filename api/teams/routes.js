import { Router } from "express";

import { authenticationMiddleware } from './../../middleware/auth.js';
import { getTeamHandler, updateTeamHandler } from './controller.js';

const router = Router()

/**
 * 
 * @openapi
 * '/api/teams':
 *  get:
 *     tags:
 *     - Teams
 *     summary: Returns the team of a user
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/UpdateTeamResponse'
 *       409:
 *         description: Conflict
 *       400:
 *         description: Bad request
 */
router.get('/', authenticationMiddleware, getTeamHandler);

/**
 * 
 * @openapi
 * '/api/teams':
 *  post:
 *     tags:
 *     - Teams
 *     summary: Updates a team's name, country
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateTeamInput'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UpdateTeamResponse'
 *       409:
 *         description: Conflict
 *       400:
 *         description: Bad request
 */
router.post('/:id', authenticationMiddleware, updateTeamHandler);

export default router;