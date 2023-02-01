import request from 'supertest';

import createServer from "../../startup/server.js";

const app = createServer();

describe('App', () => {
    describe('GET /', () => {
        it('should respond with 200 status', async () => {
            const response = await request(app).get('/');
            expect(response.statusCode).toBe(200);
        })
    })
})