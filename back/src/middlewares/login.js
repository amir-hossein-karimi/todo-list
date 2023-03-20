const { StatusCodes } = require("http-status-codes");
const { createError } = require("../errors");
const USER = require("../model/user.model");
const { decodeToken } = require("../utils/jwt");

const login = async (req, res, done, reqSave) => {
  try {
    const { token } = req.headers;

    if (!token) {
      throw {
        message: "token is required",
      };
    }

    const decodedTokenValue = await decodeToken(token);

    const user = await new USER().getOne({
      username: decodedTokenValue.username,
    });

    if (user) {
      if (user.token === token) {
        reqSave({ user });
      } else {
        throw {
          message: "token is not valid",
          statusCode: 403,
        };
      }
    } else {
      throw {
        errorMessage: "user not found",
        statusCode: StatusCodes.BAD_REQUEST,
      };
    }
  } catch (error) {
    createError(
      res,
      error.statusCode || StatusCodes.UNAUTHORIZED,
      error.errorMessage || "your token is expired"
    );
    return done();
  }
};

module.exports = login;
