import { startSession } from "mongoose";
import { hash, compare, genSalt } from "bcrypt";

import { positions } from "../utils.js";
import { User } from "./model.js";
import { createTeam } from './../teams/service.js';
import { createPlayer } from './../players/service.js';

export const createUser = async (user, session) => {
    let newUser = new User(user);
    newUser.password = await hashPassword(newUser.password);
    await newUser.save({ session });
    return newUser;
}

export const findUserByEmail = async (userEmail) => {
    return await User.findOne({ email: userEmail });
}   

export const initializeUser = async (user) => {
    const session = await startSession();
    session.startTransaction();

    let newUser, newTeam, newPlayer;
    try {
        newUser = await createUser(user, session);

        newTeam = await createTeam(newUser._id, session);

        for (let position in positions) {
            let positionCount = positions[position];
            for (let i = 0; i < positionCount; i++) {
                newPlayer = createPlayer({
                    position,
                    teamId: newTeam._id,
                    managerId: newUser._id,
                }, session);
            }
        }

        await session.commitTransaction();
    } catch (error) {
        await session.abortTransaction();
        throw error;
    } finally {
        session.endSession();
    }

    return newUser;
}

export const hashPassword = async (password) => {
    const saltRounds = 10;
    const salt = await genSalt(saltRounds);
    return hash(password, salt);
}

export const validatePassword = async (password, hashedPassword) => {
    return compare(password, hashedPassword);
}