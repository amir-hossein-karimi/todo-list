const { createError } = require("../errors");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const { hashString } = require("../utils/bcrypt");

class AuthController {
  async register(req, res) {
    const hashRes = await hashString(req.body.password);

    if (hashRes?.error) {
      return createError(
        res,
        StatusCodes.INTERNAL_SERVER_ERROR,
        ReasonPhrases.INTERNAL_SERVER_ERROR
      );
    }

    res.write(hashRes?.value || "register");
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
