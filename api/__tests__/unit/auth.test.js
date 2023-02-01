import { authenticationMiddleware } from './../../../middleware/auth.js';
import { User } from './../../users/model.js';
import { Types } from "mongoose";

describe('Auth Middleware', () => {
    let token;

    beforeEach(() => {
        token = User({ _id: Types.ObjectId.generate() }).generateAuthToken()
    })

    it('should ', () => {
        const req = {'x-auth-token': token};
        const res = {};
        const next = jest.fn();
        authenticationMiddleware(req, res, next);
    })
})