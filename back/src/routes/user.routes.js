const { UserController } = require("../controller/user.controller");
const login = require("../middlewares/login");

const userRoutes = {
  "/all": {
    controller: UserController.all,
    method: "get",
  },
  "/one": {
    controller: UserController.getOne,
    method: "get",
  },
  "/create": {
    controller: UserController.create,
    method: "post",
  },
  "/update": {
    controller: UserController.update,
    method: "put",
  },
  "/delete": {
    controller: UserController.delete,
    method: "delete",
  },
};

module.exports = userRoutes;
