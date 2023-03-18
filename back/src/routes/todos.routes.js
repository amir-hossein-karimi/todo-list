const { TodosController } = require("../controller/todos.controller");

const todosRoutes = {
  "/all": {
    controller: TodosController.getAll,
    method: "get",
  },
  "/create": {
    controller: TodosController.create,
    method: "post",
  },
  "/update": {
    controller: TodosController.update,
    method: "put",
  },
  "/delete": {
    controller: TodosController.delete,
    method: "delete",
  },
};

module.exports = todosRoutes;
