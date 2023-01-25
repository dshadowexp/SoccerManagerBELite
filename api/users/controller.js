import { validationResponse } from "../responses.js";
import { validateUser } from "./model.js"

export const createUserHandler = async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(validationResponse(error.details[0].message))


}

export const getUserHandler = async (req, res) => {

}

export const authenticateUser = async (req, res) => {

}