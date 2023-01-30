import { Types } from "mongoose"

export const positions = {
    "goalkeeper": 2,
    "defender": 6,
    "midfielder": 6,
    "attacker": 5
};

export const validateObjectId = function(objectId) {
    return Types.ObjectId.isValid(objectId);
} 