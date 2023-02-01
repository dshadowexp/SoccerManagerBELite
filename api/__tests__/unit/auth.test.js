import { authenticationMiddleware } from './../../../middleware/auth.js';

describe('Auth Middleware', () => {

    it('should ', () => {
        const req = {};
        const res = {};
        const next = jest.fn();
        authenticationMiddleware(req, res, next);
    })
})