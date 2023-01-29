import { Team } from './model.js';

export const getTeamWithId = async (id) => {
    return await Team.findById(id);
}

export const updateTeam = async (_id, team) => {
    return await Team.findByIdAndUpdate(
        { _id },
        { $set: team },
        { returnOriginal: false }
    );
}