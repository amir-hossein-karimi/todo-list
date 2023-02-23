const authRoutes = require("./auth.routes");
const todosRoutes = require("./todos.routes");

const baseRoutes = {
  "/todos": todosRoutes,
  "/auth": authRoutes,
};

module.exports = baseRoutes;
