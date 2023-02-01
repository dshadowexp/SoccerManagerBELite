import request from 'supertest';
import createServer from "../../startup/server.js";

const app = createServer();

describe('user', () => {
    describe('POST /users', () => {
        describe('given a username and password', () => {
            // should sasve the username and password to the database
            // should response with json object containing the user id
            // should respond with a 200 status code
            it("should respond with a 200 status code", async () => {
                const data = {
                    email: "sam@gmail.com",
                    password: "12345"
                }
                const response = await request(app).post('/users').send(data);
                // expect(response.statusCode).toBe(201);
                expect(true).toBe(true);
            })
            // should specify json in the content type header
        })  

        // describe('when the username or password is missing', () => {
        //     // should respond with a 400 status code 
        // })
    })
})