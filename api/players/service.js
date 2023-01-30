import { Player } from "./model.js";

export const createPlayer = async (player, session) => {
    let newPlayer = new Player(player);
    await newPlayer.save({ session });
    return newPlayer;
}

export const getPlayerById = async (id) => {
    return await Player.findById(id);
}

export const getPlayersByManagerId = async (managerId) => {
    return await Player.find({ managerId });
}

export const getPlayersByTeamId = async (teamId) => {
    return await Player.find({ teamId });
}

export const updatePlayer = async (_id, player, session=null) => {
    let options = { new: true, returnOriginal: false }
    if (session) options.session = session;

    return await Player.findByIdAndUpdate(
        { _id },
        { $set: player },
        options
    );
}