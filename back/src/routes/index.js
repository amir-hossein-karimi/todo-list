const { baseRouteSchema } = require("../controller");
const authRoutes = require("./auth.routes");
const todosRoutes = require("./todos.routes");

const baseRoutes = {
  "/todos": todosRoutes,
  "/auth": authRoutes,
  "/": baseRouteSchema,
};

module.exports = baseRoutes;
