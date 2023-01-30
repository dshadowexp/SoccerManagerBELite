import { Schema, model } from "mongoose";
import Joi from "joi";
import JoiObjectId from "joi-objectid";
const myJoiObjectId = JoiObjectId(Joi);

/**
 * 
 * @openapi
 * components:
 *  schemas:
 *    CreateTransferInput:
 *      type: object
 *      required:
 *        - player
 *        - price
 *      properties:
 *        player:
 *          type: string
 *          default: 123907ha7d8f7
 *        price:
 *          type: integer
 *          default: 2000000
 *    CreateTransferResponse:
 *      type: object
 *      required:
 *        - player
 *        - password
 *      properties:
 *        player:
 *          type: object
 *          $ref: '#/components/schemas/UpdatePlayerResponse'
 *        price:
 *          type: string
 *          default: samkofi@gmail.com
 */
const transferSchema = new Schema({
    player: {
        type: Schema.Types.ObjectId,
        ref: 'Player',
        required: true,
        unique: true
    },
    price: {
        type: Number,
        min: 0,
        required: true
    }
});

export const Transfer = model('Transfer', transferSchema);

export const validateTransfer = function(transfer) {
    const schema = Joi.object({
        player: myJoiObjectId().required(),
        price: Joi.number().min(0).required()
    });

    return schema.validate(transfer);
}