import { Router } from "express";
import { authenticationMiddleware } from './../../middleware/auth.js';
import asyncErrorHandler from './../../middleware/async.js';
import { createTransferHandler, getAllTransfersHandler, transferBuyHandler } from './controller.js';


const router = Router();

/**
 * 
 * @openapi
 * '/api/transfers':
 *  get:
 *     tags:
 *     - Transfers
 *     summary: Returns a list of transfers
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/CreateTransferResponse'
 *       409:
 *         description: Conflict
 *       400:
 *         description: Bad request
 */
router.get('/', authenticationMiddleware, getAllTransfersHandler);

/**
 * 
 * @openapi
 * '/api/transfers':
 *  post:
 *     tags:
 *     - Transfers
 *     summary: Register a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateTransferInput'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateTransferResponse'
 *       409:
 *         description: Conflict
 *       400:
 *         description: Bad request
 */
router.post('/', authenticationMiddleware, createTransferHandler);

/**
 * 
 * @openapi
 * '/api/transfers/buy':
 *  post:
 *     tags:
 *     - Transfers
 *     summary: Buy a player for a transfer list
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateTransferResponse'
 *       409:
 *         description: Conflict
 *       400:
 *         description: Bad request
 */
router.post('/buy/:id', authenticationMiddleware, asyncErrorHandler(transferBuyHandler));

export default router;