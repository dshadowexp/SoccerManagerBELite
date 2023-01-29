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
 *        - name
 *        - country
 *      properties:
 *        name:
 *          type: string
 *          default: FC Barcelona
 *        country:
 *          type: string
 *          default: Spain
 *    UpdatePlayerResponse:
 *      type: object
 *      required:
 *        - name
 *        - country
 *      properties:
 *        name:
 *          type: string
 *          default: FC Barcelona
 *        country:
 *          type: string
 *          default: Spain
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