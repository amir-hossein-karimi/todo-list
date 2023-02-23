const { AuthController } = require("../controller/auth.controller");

const authRoutes = {
  "/register": AuthController.register,
};

module.exports = authRoutes;
