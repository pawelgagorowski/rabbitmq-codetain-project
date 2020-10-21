import { RequestHandler } from "express";
import { User, Person } from "../models/users";
import { gettingUsers } from "../utils/thirdParty";

const users: Person[] = [];

export const getUsers: RequestHandler = async (req, res) => {
    const noUserMessage = "no users";
    const persons: Array<Person> | [] = await gettingUsers();
    if(persons.length > 0) {
      persons.forEach((el) => {
        const user = new User(el)
        users.push(user)
      })
      res.send(users)
    } else {
      res.send(noUserMessage)
    }
}