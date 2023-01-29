import _ from "lodash";

import { validateTeam } from "./model.js";
import { errorResponse, successResponse, validationResponse } from "../responses.js";
import { updateTeam } from './service.js';

export const updateTeamHandler = async (req, res) => {
    const id = req.params.id;
    if (!validateObjectId(id)) return res.status(400).send(errorResponse('Invalid request parameter', 400));

    const { error } = validateTeam(req.body);
    if (error) return res.status(422).send(validationResponse(error.details[0].message));

    let team = await getTeamWithId(id);
    if (!team) return res.status(404).send(errorResponse('Team does not exist', 404));

    if (team.managerId != req.user._id)
        return res.status(403).send(errorResponse('Action unauthorized', 403));

    team = await updateTeam(_.pick(req.body, ['name', 'country']));
    res.status(200).send(successResponse('Updated successfully', team, 200));
}