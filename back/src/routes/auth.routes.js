const { AuthController } = require("../controller/auth.controller");

const authRoutes = {
  "/register": {
    controller: AuthController.register,
    method: "post",
  },
  "/login": {
    controller: AuthController.login,
    method: "post",
  },
  "/refreshToken": {
    controller: AuthController.refreshToken,
    method: "post",
  },
};

module.exports = authRoutes;
