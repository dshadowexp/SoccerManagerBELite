import { hash, compare, genSalt } from "bcrypt";

import { User } from "./model.js";

export const createUser = async (user) => {
    let newUser = new User(user);
    newUser.password = await hashPassword(newUser.password);
    await newUser.save();
    return newUser;
}

export const findUserByEmail = async (userEmail) => {
    return await User.findOne({ email: userEmail });
}   

export const hashPassword = async (password) => {
    const saltRounds = 10;
    const salt = await genSalt(saltRounds);
    return hash(password, salt);
}

export const validatePassword = async (password, hashedPassword) => {
    return compare(password, hashedPassword);
}

export const initializeUser = async (user) => {
    let newUser = await createUser(user);

    return newUser
}