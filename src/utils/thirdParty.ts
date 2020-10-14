import rp from "request-promise";

export async function gettingUsers(): Promise<Person[] | undefined> {
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

type Person = {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
  created_at: Date;
  updated_at: Date;
}
