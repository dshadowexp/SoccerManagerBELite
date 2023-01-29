import { Types } from "mongoose"

export const validateObjectId = function(objectId) {
    return Types.ObjectId.isValid(objectId);
} 