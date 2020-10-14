import { RequestHandler } from "express";
import { User } from "../models/users";
import { gettingUsers } from "../utils/thirdParty";

const USERS:[] = [];

export const getUsers: RequestHandler = async (req, res, next) => {
    const arrayOfUsers = await gettingUsers();
    console.log(arrayOfUsers);
}