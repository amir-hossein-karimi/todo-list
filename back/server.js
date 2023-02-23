const http = require("http");
const configRoutes = require("./config/routes");

http.createServer(configRoutes).listen("3500");
