const { TodosController } = require("../controller/todos.controller");

const todosRoutes = {
  "/get-all": TodosController.getAll,
};

module.exports = todosRoutes;
