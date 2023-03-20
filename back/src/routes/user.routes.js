const { UserController } = require("../controller/user.controller");

const userRoutes = {
  "/all": {
    method: "get",
    controller: UserController.all,
  },
  "/one": {},
  "/create": {},
  "/update": {},
  "/delete": {},
};

module.exports = userRoutes;
