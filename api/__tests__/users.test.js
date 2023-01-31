import supertest from "supertest";
import request from "supertest";
import app from "../../app.js";

describe('POST /users', () => {
    describe('given a username and password', () => {
        // should sasve the username and password to the database
        // should response with json object containing the user id
        // should respond with a 200 status code
        test("should respond with a 200 status code", async () => {
            const response = await (await request(app).post('/users')).send({
                email: "sam@gmail.com",
                password: "12345"
            })
            expect(response.statusCode).toBe(201);
        })
        // should specify json in the content type header
    })  

    describe('when the username or password is missing', () => {
        // should respond with a 400 status code 
    })
})