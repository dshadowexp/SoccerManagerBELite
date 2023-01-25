import Joi from "joi";
import { Schema, model } from "mongoose";

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateUserInput:
 *      type: object
 *      required:
 *        - email
 *        - password
 *      properties:
 *        email:
 *          type: string
 *          default: samkofi@gmail.com
 *        password:
 *          type: string
 *          default: strong12345
 *    CreateUserResponse:
 *      type: object
 *      required:
 *        - email
 *        - password
 *      properties:
 *        _id:
 *          type: string
 *          default: 1234sd346f9808h
 *        email:
 *          type: string
 *          default: samkofi@gmail.com
 */
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 256
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    }
});

const User = model('User', userSchema);

const validateUser = function(user) {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(5).max(256).required()
    });

    return schema.validate(user);
}

export {
    User,
    validateUser
}