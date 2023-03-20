const { baseRouteSchema } = require("../controller");
const authRoutes = require("./auth.routes");
const todosRoutes = require("./todos.routes");
const userRoutes = require("./user.routes");

const baseRoutes = {
  "/todos": todosRoutes,
  "/auth": authRoutes,
  "/user": userRoutes,
  "/": baseRouteSchema,
};

module.exports = baseRoutes;
