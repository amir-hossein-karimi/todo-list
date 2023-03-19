const http = require("http");
const DB = require("./src/config/db");
const configRoutes = require("./src/config/routes");
const { SERVER_PORT } = require("./src/constants");

new DB().mongo();

http.createServer(configRoutes).listen(SERVER_PORT);
