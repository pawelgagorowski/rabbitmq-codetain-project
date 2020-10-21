import pingRoute      from './routes/ping';
import Server from './server/server';
import users from './routes/users';
console.log("HELLO!")
// console.log(users)
console.log(users.stack[0].route)
// console.log(users.stack[0].route.path)
// console.log(users.stack[1].route.stack[0].method)


// let server = new Server();
// server.addApiRoute(pingRoute);
// server.addApiRoute(users)
// server.start();
