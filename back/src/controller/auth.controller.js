const { createError } = require("../errors");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const { hashString } = require("../utils/bcrypt");
const { registerValidatorSchema } = require("../validators/auth.validatore");
const USER = require("../model/user.model");

class AuthController {
  async register(req, res) {
    try {
      const dataValue = await registerValidatorSchema.validateAsync(req.body);

      const hashRes = await hashString(dataValue.password);

      if (hashRes?.error) {
        return createError(
          res,
          StatusCodes.INTERNAL_SERVER_ERROR,
          ReasonPhrases.INTERNAL_SERVER_ERROR
        );
      }

      res.write(hashRes?.value || "register");
      return res.end();
    } catch (error) {
      return createError(
        res,
        StatusCodes.BAD_REQUEST,
        error.details[0].message
      );
    }
  }

  async login(req, res) {
    const allUsers = await new USER().all();

    res.write(
      JSON.stringify({
        data: allUsers,
      })
    );
    return res.end();
  }

  refreshToken(req, res) {
    res.write("register");
    return res.end();
  }
}

module.exports = {
  AuthController: new AuthController(),
};
