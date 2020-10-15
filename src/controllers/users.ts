import { RequestHandler } from "express";
import { User } from "../models/users";
import { gettingUsers } from "../utils/thirdParty";

let USERS: User[] = [];

// why Person Interface can not be attached as a expected returned type to arrayOfUsers?
export const getUsers: RequestHandler = async (req, res, next) => {
    let arrayOfUsers = await gettingUsers();
    arrayOfUsers.forEach(({id, name, email, gender, status, created_at}) => {
      const user = new User(id, name, email, gender, status, created_at)
      USERS.push(user)
    })
    console.log(USERS)
}

// interface Person {
//   id: number;
//   name: string;
//   email: string;
//   gender: string;
//   status: string;
//   created_at: Date;
//   updated_at: Date;
// }
//
// interface Person extends Array<Person>{}
