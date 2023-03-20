const { createError } = require("../errors");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const { hashString, compareStringWithHash } = require("../utils/bcrypt");
const {
  registerValidatorSchema,
  loginValidatorSchema,
} = require("../validators/auth.validator");
const USER = require("../model/user.model");
const { createToken } = require("../utils/jwt");

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

      const createRes = await new USER().create({
        ...dataValue,
        password: hashRes,
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
      const dataValue = await loginValidatorSchema.validateAsync(req.body);

      const user = await new USER().getOne({ username: dataValue.username });

      if (!user) {
        throw {
          message: "this username is not exist",
          statusCode: StatusCodes.BAD_REQUEST,
        };
      }

      const isPaswordCorrect = await compareStringWithHash(
        dataValue.password,
        user.password
      );

      if (!isPaswordCorrect)
        throw {
          message: "password is wrong",
          statusCode: StatusCodes.BAD_REQUEST,
        };

      const token = await createToken({ username: user.username });
      const refreshToken = await createToken({ username: user.username }, true);

      await new USER().update(
        { username: user.username },
        {
          token,
          refreshToken,
        }
      );

      res.write(
        JSON.stringify({
          success: true,
          statusCode: 200,
          data: {
            token,
            refreshToken,
          },
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
