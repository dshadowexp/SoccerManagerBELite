import _ from "lodash";

import { validateTeam } from "./model.js";
import { errorResponse, successResponse, validationResponse } from "../responses.js";
import { getTeamByMangerId, getTeamById, updateTeam } from './service.js';
import { validateObjectId } from "../utils.js";

export const getTeamHandler = async (req, res) => {
    let team = await getTeamByMangerId(req.user._id);
    if (!team) return res.status(404).send('Team does not exist');

    res.status(200).send(successResponse('Success', team, 200));
}

export const updateTeamHandler = async (req, res) => {
    const id = req.params.id;
    if (!validateObjectId(id)) return res.status(400).send(errorResponse('Invalid request parameter', 400));

    const { error } = validateTeam(req.body);
    if (error) return res.status(422).send(validationResponse(error.details[0].message));

    let team = await getTeamById(id);
    if (!team) return res.status(404).send(errorResponse('Team does not exist', 404));

    if (!team.managerId.equals(req.user._id))
        return res.status(403).send(errorResponse('Not authorized', 403));

    team = await updateTeam(team._id, _.pick(req.body, ['name', 'country']));
    res.status(200).send(successResponse('Updated successfully', team, 200));
}