import { stringify } from "querystring";

export class User {
    constructor(public id: number, public name: string, public email: string, public gender: string, public status: string, public created: string, public updated: string ) {
    }
}