import axios from "axios";
import { User, Person } from "../models/users";

export async function gettingUsers(): Promise<Person[] | []> {
  const url = "https://gorest.co.in/public-api/users";
  const result:[] = [];
  try {
      const body = await axios.get(url);
      const result = JSON.parse(body.data);
      const data = (result as { data: [] }).data;
      return data;
  } catch(e) {
    console.log(e);
  }
  return result
}