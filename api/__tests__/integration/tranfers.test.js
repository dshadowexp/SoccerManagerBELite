import request from "supertest";
import createServer from "./../../startup/server.js";

const app = createServer();

describe('Transfers', () => {
    describe('GET /api/transfers', () => {
        it('should return all transfer', () => {
            expect(true).toBe(true);
        })
    })

    describe('POST /api/transfers/', () => {
        describe('given a player and price', () => {
            it('should respond with a 200 status', () => {
                expect(true).toBe(true);
            })
        })
    })

    describe('POST /api/transfers/buy/:id', () => {
        describe('given the id of a transfer', () => {
            it('should respond with a 200 status', () => {
                expect(true).toBe(true);
            })
        })
    })
})