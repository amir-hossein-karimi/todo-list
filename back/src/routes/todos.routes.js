const { TodosController } = require("../controller/todos.controller");
const checkLogin = require("../middlewares/checkLogin");

const todosRoutes = {
  "/all": {
    controller: TodosController.getAll,
    preHandler: [checkLogin],
    method: "get",
  },
  "/one": {
    controller: TodosController.getOne,
    preHandler: [checkLogin],
    method: "get",
  },
  "/create": {
    controller: TodosController.create,
    preHandler: [checkLogin],
    method: "post",
  },
  "/update": {
    controller: TodosController.update,
    preHandler: [checkLogin],
    method: "put",
  },
  "/delete": {
    controller: TodosController.delete,
    preHandler: [checkLogin],
    method: "delete",
  },
};

module.exports = todosRoutes;
