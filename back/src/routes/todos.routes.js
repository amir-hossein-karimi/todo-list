const { TodosController } = require("../controller/todos.controller");

const todosRoutes = {
  "/all": {
    controller: TodosController.getAll,
    method: "get",
    preHandler: [
      (req, res, done) => {
        console.log("preHandler 1");
        res.write("this is prehandler 1");
        res.end();
        done();
      },
      (req, res) => {
        console.log("preHandler 2");
      },
    ],
  },
  "/create": { controller: TodosController.create, method: "post" },
  "/update": { controller: TodosController.update, method: "put" },
  "/delete": { controller: TodosController.delete, method: "delete" },
};

module.exports = todosRoutes;
