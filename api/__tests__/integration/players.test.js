import request from "supertest";
import createServer from "./../../startup/server.js";

const app = createServer();

describe('Players', () => {
    describe('GET /api/players', () => {
        it('should return all players of the user', () => {
            expect(true).toBe(true);
        })
    })

    describe('POST /api/players/:id', () => {
        describe('given a first name and last name', () => {
            it('should respond with a 200 status', () => {
                expect(true).toBe(true);
            })
        })
    })
})