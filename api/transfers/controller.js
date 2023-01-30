import _ from "lodash";

import { validateTransfer } from "./model.js";
import { successResponse, errorResponse, validationResponse } from './../responses.js';
import { getPlayerById } from "../players/service.js";
import { getTransferByPlayer, getTransferById, createTransfer, getAllTransfers, buyFromTransfer } from "./service.js";
import { validateObjectId } from "../utils.js";

export const getAllTransfersHandler = async (req, res) => {
    const transfers = await getAllTransfers();
    res.status(200).send(successResponse('Successful', transfers, 200));
}

export const createTransferHandler = async (req, res) => {
    const { error } = validateTransfer(req.body);
    if (error) return res.status(400).send(validationResponse(error.details[0].message));

    const playerId = req.body.player;

    const player = await getPlayerById(playerId);
    if (!player) return res.status(404).send(errorResponse('Player not found', 404));
    if (!player.managerId.equals(req.user._id)) 
        return res.status(403).send(errorResponse('Not authorized', 403))

    let transfer = await getTransferByPlayer(playerId);
    if (transfer) return res.status(409).send(errorResponse('Transfer already exists', 409));

    transfer = await createTransfer(_.pick(req.body, ['player', 'price']))
    res.status(201).send(successResponse('Created successfully', transfer, 201));
}

export const transferBuyHandler = async (req, res) => {
    const id = req.params.id;
    if (!validateObjectId(id)) return res.status(400).send(errorResponse('Invalid response parameter', 400));

    let transfer = await getTransferById(id);
    if (!transfer) return res.status(404).send(errorResponse('Transfer does not exist', 404));

    if (transfer.player.managerId.equals(req.user._id))
        return res.status(400).send(errorResponse('Action not permitted', 400));

    let message = await buyFromTransfer(transfer, req.user._id);
    res.status(200).send(successResponse(message, {}, 200));
}