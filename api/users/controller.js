import _ from "lodash";
import config from "config";

import { errorResponse, successResponse, validationResponse } from "../responses.js";
import { createUser, findUserByEmail, validatePassword } from './service.js';
import { validateUser } from "./model.js";

export const createUserHandler = async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(validationResponse(error.details[0].message))

    let user = await findUserByEmail(req.body.email);
    if (user) return res.status(409).send(errorResponse("User already exists", 409));

    user = await createUser(_.pick(req.body, ['email', 'password']));

    const token = user.generateAuthToken();

    res.header(config.get('token'), token).status(201).send(
        successResponse(
            'Created', 
            _.pick(user, ['_id', 'email']), 
            201
        )
    );
}

export const authenticateUser = async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(validationResponse(error.details[0].message));

    let user = await findUserByEmail(req.body.email);
    if (!user) return res.status(404).send(errorResponse('Invalid email or password', 404));

    const validPassword = await validatePassword(req.body.password, user.password);
    if (!validPassword) return res.status(404).send(errorResponse('Invalid email or password', 404));

    const token = user.generateAuthToken();

    res.status(200).send(
        successResponse(
            'Authentication successfull',
            token,
            200
        )
    )
}