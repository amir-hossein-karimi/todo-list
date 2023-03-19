const { createError } = require("../errors");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const { hashString } = require("../utils/bcrypt");
const { registerValidatorSchema } = require("../validators/auth.validatore");
const USER = require("../model/user.model");

class AuthController {
  async register(req, res) {
    try {
      const dataValue = await registerValidatorSchema.validateAsync(req.body);

      const user = await new USER().getOne({ username: dataValue.username });
      if (user) {
        throw {
          message: "this user already exist",
          statusCode: StatusCodes.CONFLICT,
        };
      }

      const hashRes = await hashString(dataValue.password);

      if (hashRes?.error) {
        return createError(
          res,
          StatusCodes.INTERNAL_SERVER_ERROR,
          ReasonPhrases.INTERNAL_SERVER_ERROR
        );
      }

      const { data, error } = await new USER().create({
        ...dataValue,
        password: hashRes.value,
      });

      if (error) {
        throw {
          message: error,
          statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        };
      }

      res.write(
        JSON.stringify({
          success: true,
          statusCode: 201,
          data,
        })
      );
      return res.end();
    } catch (error) {
      return createError(
        res,
        error.statusCode || StatusCodes.BAD_REQUEST,
        error.message || error.details[0].message
      );
    }
  }

  async login(req, res) {
    const allUsers = await new USER().all();

    res.write(
      JSON.stringify({
        success: true,
        statusCode: 200,
        data: allUsers.data,
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
