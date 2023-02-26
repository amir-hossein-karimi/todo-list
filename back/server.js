const http = require("http");
const configRoutes = require("./src/config/routes");

http.createServer(configRoutes).listen("3500");
