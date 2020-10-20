import { RequestHandler } from "express";
import { User, Person } from "../models/users";
import { gettingUsers } from "../utils/thirdParty";

const USERS: Person[] = [];

export const getUsers: RequestHandler = async (req, res, neet) => {
    const arrayOfUsers: Array<Person> = await gettingUsers();
    console.log(arrayOfUsers)
    arrayOfUsers.forEach((el) => {
      const user = new User(el)
      USERS.push(user)
    })
    res.send(USERS)
}