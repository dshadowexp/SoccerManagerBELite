import _ from "lodash";

import { valiatePlayer } from "./model.js";
import { validateObjectId } from './../utils/index.js';
import { errorResponse, successResponse, validationResponse } from "../utils/responses.js";
import { getPlayersByManagerId, getPlayerById, updatePlayer } from "./service.js";

export const getPlayersHandler = async (req, res) => {
    const players = await getPlayersByManagerId(req.user._id);
    res.status(200).send(successResponse('Successful', players, 200));
}

export const updatePlayerHandler = async (req, res) => {
    const id = req.params.id;
    if (!validateObjectId(id)) return res.status(400).send(errorResponse('Invalid request parameter', 400));

    const { error } = valiatePlayer(req.body);
    if (error) return res.status(400).send(validationResponse(error.details[0].message));

    let player = await getPlayerById(id);
    if (!player) return res.status(409).send(errorResponse('Player does not exist', 409));

    if (!player.managerId.equals(req.user._id))
        return res.status(403).send(errorResponse('Action unauthorized', 403));

    player = await updatePlayer(player._id, _.pick(req.body, ['firstName', 'lastName', 'country']));
    res.status(200).send(successResponse('Updated successfully', player, 200));
}