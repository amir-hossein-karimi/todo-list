const { hashString } = require("../utils/bcrypt");

class AuthController {
  register(req, res) {
    res.write("register");
    res.end();
  }

  login(req, res) {
    res.write("register");
    res.end();
  }

  refreshToken(req, res) {
    res.write("register");
    res.end();
  }
}

module.exports = {
  AuthController: new AuthController(),
};
