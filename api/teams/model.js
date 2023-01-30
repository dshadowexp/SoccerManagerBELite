import { Schema, model } from "mongoose";
import Joi from "joi";

/**
 * 
 * @openapi
 * components:
 *  schemas:
 *    UpdateTeamInput:
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
 *    UpdateTeamResponse:
 *      type: object
 *      required:
 *        - name
 *        - country
 *        - value
 *        - budget
 *        - managerId
 *      properties:
 *        name:
 *          type: string
 *          default: FC Barcelona
 *        country:
 *          type: string
 *          default: Spain
 *        value:
 *          type: integer
 *          default: 19000000
 *        budget:
 *          type: integer
 *          default: 5000000
 *        managerId:
 *          type: string
 *          default: 123907ha7d8f7
 *      
 */
const teamSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 124,
        default: 'team-name'
    },
    country: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxlength: 256,
        default: 'team-country'
    },
    value: {
        type: Number,
        min: 0,
        default: 0
    },
    budget: {
        type: Number,
        min: 0,
        default: 5000000
    },
    managerId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        unique: true,
        required: true
    }
});

export const Team = model('Team', teamSchema);

export const validateTeam = function(team) {
    const schema = Joi.object({
        name: Joi.string().min(3).max(124),
        country: Joi.string().min(3).max(256)
    });

    return schema.validate(team);
}