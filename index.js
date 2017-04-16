const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const session = require('express-session');

server.use(middlewares);
server.use(session({
  secret: 'LEKWJt3l;k4j5l;k2m',
}));

server.use(jsonServer.bodyParser);

server.use(router);

server.listen(3000, () => console.log('JSON Server is running'));
