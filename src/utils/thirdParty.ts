import rp from "request-promise";

export async function gettingUsers() {
    const options = {
        method: 'GET',
        url: 'https://gorest.co.in/public-api/users'
    };
    try {
        let body = await rp(options);
        let data = JSON.parse(body);
        return data;
    } catch(e) {
        console.log(e)
    }
}