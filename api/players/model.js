import { Schema, model } from "mongoose";
import Joi from 'joi';

/**
 * 
 * @openapi
 * components:
 *  schemas:
 *    UpdatePlayerInput:
 *      type: object
 *      required:
 *        - firstName
 *        - lastName
 *        - country
 *      properties:
 *        firstName:
 *          type: string
 *          default: Lionel
 *        lastName:
 *          type: string
 *          default: Messi
 *        country:
 *          type: string
 *          default: Argentina
 *    UpdatePlayerResponse:
 *      type: object
 *      required:
 *        - firstName
 *        - lastName
 *        - country
 *        - position
 *        - age
 *        - marketValue
 *        - teamId
 *        - manageId
 *      properties:
 *        firstName:
 *          type: string
 *          default: Lionel
 *        lastName:
 *          type: string
 *          default: Messi 
 *        country:
 *          type: string
 *          default: Argentina
 *        position:
 *          type: string
 *          default: attacker
 *        age:
 *          type: integer
 *          default: 25
 *        marketValue:
 *          type: integer
 *          default: 1500000
 *        teamId:
 *          type: string
 *          default: 123907ha7d8f7
 *        manageId:
 *          type: string
 *          default: 387gh988bh8h9
 */
const playerSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 124,
        default: 'first-name'
    },
    lastName:  {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 124,
        default: 'last-name'
    },
    country: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxlength: 256,
        default: 'player-country'
    },
    position: {
        type: String,
        enum: ["goalkeeper", "defender", "midfielder", "attacker"],
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 40,
        default: function() {
            let randomAge = Math.random() * (40 - 18 + 1) + 18
            return Math.floor(randomAge);
        }
    },
    marketValue: {
        type: Number,
        min: 0,
        default: 1000000
    },
    teamId: {
        type: Schema.Types.ObjectId,
        ref: 'Team',
        required: true
    },
    managerId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

export const Player = model('Player', playerSchema);

export const valiatePlayer = function(player) {
    const schema = Joi.object({
        firstName: Joi.string().min(1).max(124),
        lastName: Joi.string().min(1).max(124),
        country: Joi.string().min(3).max(124),
    });

    return schema.validate(player);
}