import { Router } from "express";
import { authenticationMiddleware } from './../../middleware/auth.js';
import { getPlayersHandler, updatePlayerHandler } from './controller.js';

const router = Router();

/**
 * 
 * @openapi
 * '/api/players':
 *  get:
 *     tags:
 *     - Players
 *     summary: Returns a list of players
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/UpdatePlayerResponse'
 *       409:
 *         description: Conflict
 *       400:
 *         description: Bad request
 */
router.get('/', authenticationMiddleware, getPlayersHandler)

/**
 * 
 * @openapi
 * '/api/players':
 *  post:
 *     tags:
 *     - Players
 *     summary: Updates a player's firstName, lastName, country
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdatePlayerInput'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UpdatePlayerResponse'
 *       409:
 *         description: Conflict
 *       400:
 *         description: Bad request
 */
router.post('/:id', authenticationMiddleware, updatePlayerHandler)

export default router;