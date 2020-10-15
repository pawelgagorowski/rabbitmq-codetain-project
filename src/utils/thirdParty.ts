import rp from "request-promise";
import { User } from "../models/users";

export async function gettingUsers(): Promise<User[] | undefined> {
    const options = {
        method: 'GET',
        url: 'https://gorest.co.in/public-api/users'
    };
    try {
        const body = await rp(options);
        const result = JSON.parse(body);
        const data = (result as { data: [] }).data;
        return data;
    } catch(e) {
        console.log(e)
    }
}
