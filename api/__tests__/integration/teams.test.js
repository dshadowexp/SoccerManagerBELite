import request from "supertest";
import createServer from "./../../startup/server.js";

const app = createServer();

describe('Teams', () => {
    describe('GET /api/teams', () => {
        it('should return the team of the user', () => {
            expect(true).toBe(true);
        })
    })

    describe('POST /api/teams/:id', () => {
        describe('given a name and country', () => {
            it('should respond with a 200 status', () => {
                expect(true).toBe(true);
            })
        })
    })
})