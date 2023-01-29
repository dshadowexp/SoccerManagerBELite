import { Team } from './model.js';

export const createTeam = async (managerId, session) => {
    let newTeam = new Team({ managerId });
    await newTeam.save({ session });
    return newTeam;
}

export const getTeamByMangerId = async (managerId) => {
    return await Team.findOne({ managerId });
}

export const getTeamById = async (id) => {
    return await Team.findById(id);
}

export const updateTeam = async (_id, team, session=null) => {
    let options = { new: true, returnOriginal: false }
    if (session) options.session = session;

    return await Team.findByIdAndUpdate(
        { _id },
        { $set: team },
        options,
    );
}