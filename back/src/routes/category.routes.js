const { CategoryController } = require("../controller/category.controller");
const checkLogin = require("../middlewares/checkLogin");

const categoryRoutes = {
  "/all": {
    controller: CategoryController.getAll,
    preHandler: [checkLogin],
    method: "get",
  },
  "/one": {
    controller: CategoryController.getOne,
    preHandler: [checkLogin],
    method: "get",
  },
  "/create": {
    controller: CategoryController.create,
    preHandler: [checkLogin],
    method: "post",
  },
  "/update": {
    controller: CategoryController.update,
    preHandler: [checkLogin],
    method: "put",
  },
  "/delete": {
    controller: CategoryController.delete,
    preHandler: [checkLogin],
    method: "delete",
  },
};

module.exports = categoryRoutes;
