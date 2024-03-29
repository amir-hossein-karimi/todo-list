const { StatusCodes } = require("http-status-codes");
const { createError } = require("../errors");
const USER = require("../model/user.model");
const { decodeToken } = require("../utils/jwt");

const checkLogin = async (req, res, done, reqSave) => {
  try {
    const { token } = req.headers;

    if (!token) {
      throw {
        errorMessage: "token is required",
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
          errorMessage: "token is not valid",
          statusCode: 403,
        };
      }
    } else {
      throw {
        errorMessage: "token is not valid",
        statusCode: 403,
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

module.exports = checkLogin;
