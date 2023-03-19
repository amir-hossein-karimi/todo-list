const { createError } = require("../errors");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const { hashString } = require("../utils/bcrypt");
const {
  registerValidatorSchema,
  loginValidatorSchema,
} = require("../validators/auth.validatore");
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

      const createRes = await new USER().create({
        ...dataValue,
        password: hashRes.value,
      });

      res.write(
        JSON.stringify({
          success: true,
          statusCode: 201,
          data: createRes,
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
    try {
      const dataValue = await loginValidatorSchema(req.body);

      const user = await new USER().getOne({ username: dataValue.username });

      if (!user) {
        throw {
          message: "this username is not exist",
          statusCode: StatusCodes.BAD_REQUEST,
        };
      }

      

      res.write(
        JSON.stringify({
          success: true,
          statusCode: 200,
          data: "test",
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

  refreshToken(req, res) {
    res.write("register");
    return res.end();
  }
}

module.exports = {
  AuthController: new AuthController(),
};
