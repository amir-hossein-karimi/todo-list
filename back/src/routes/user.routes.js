const { UserController } = require("../controller/user.controller");

const userRoutes = {
  "/all": {
    method: "get",
    controller: UserController.all,
  },
  "/one": {
    method: "get",
    controller: UserController.getOne,
  },
  "/create": {
    method: "post",
    controller: UserController.create,
  },
  "/update": {
    method: "put",
    controller: UserController.update,
  },
  "/delete": {
    method: "delete",
    controller: UserController.delete,
  },
};

module.exports = userRoutes;
