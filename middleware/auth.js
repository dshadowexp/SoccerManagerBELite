import jwt from 'jsonwebtoken';
import config from 'config';

import { errorResponse } from '../api/responses.js';
import { validateObjectId } from "../api/utils.js";

export const authenticationMiddleware = (req, res, next) => {
    const token = req.header(config.get('token'));
    if (!token) return res.status(401).send(errorResponse('Access denied, No token provided', 401));

    try {
        const payload = jwt.verify(token, 'secret');
        req.user = payload;
        next();
    } catch (ex) {
        res.status(400).send(errorResponse('Invalid token', 400));
    }
}

export const authorizationMiddleware = (req, res, next) => {
    const id = req.params.id;
    if (!validateObjectId(id)) return res.status(400).send(errorResponse('Invalid request param', 400));

}