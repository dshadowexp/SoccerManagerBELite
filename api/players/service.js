import { Player } from "./model.js";

export const getPlayerById = async (id) => {
    return await Player.findById(id);
}

export const updatePlayer = async (_id, player) => {
    return await Player.findByIdAndUpdate(
        { _id },
        { $set: player },
        { returnOriginal: false }
    );
}