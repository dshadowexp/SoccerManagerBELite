import { Router } from "express";
import { authenticationMiddleware } from './../../middleware/auth.js';
import asyncErrorHandler from './../../middleware/async.js';
import { createTransferHandler, getAllTransfersHandler, transferBuyHandler } from './controller.js';


const router = Router();

router.get('/', authenticationMiddleware, getAllTransfersHandler);

router.post('/', authenticationMiddleware, createTransferHandler);

router.post('/buy/:id', authenticationMiddleware, asyncErrorHandler(transferBuyHandler));

export default router;