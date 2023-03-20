const { StatusCodes } = require("http-status-codes");
const { createError } = require("../errors");
const USER = require("../model/user.model");
const { createUserValidatorSchema } = require("../validators/user.validator");

class UserController {
  async all(req, res) {
    try {
      const users = await new USER().all();

      res.write(
        JSON.stringify({
          success: true,
          statusCode: 200,
          data: users,
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

  async getOne(req, res) {
    try {
      const id = req.params.get("id");

      if (!id)
        throw {
          message: "id is required",
          statusCode: StatusCodes.BAD_REQUEST,
        };

      const user = await new USER().getById(id);

      if (user) {
        res.write(
          JSON.stringify({
            success: true,
            statusCode: 200,
            data: user,
          })
        );
        return res.end();
      } else {
        throw {
          message: "this user is not exist",
          statusCode: StatusCodes.BAD_REQUEST,
        };
      }
    } catch (error) {
      return createError(
        res,
        error.statusCode || StatusCodes.BAD_REQUEST,
        error.message || error.details[0].message
      );
    }
  }

  async create(req, res) {
    try {
      const dataValue = await createUserValidatorSchema.validateAsync(req.body);

      const user = await new USER().getOne({ username: dataValue.username });

      if (user) {
        throw {
          message: "this user already exist",
          statusCode: StatusCodes.CONFLICT,
        };
      }

      const createRes = await new USER().create(dataValue);

      res.write(
        JSON.stringify({
          sucess: true,
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

  update(req, res) {
    res.write("update a user");
    res.end();
  }

  delete(req, res) {
    res.write("delete user");
    res.end();
  }
}

module.exports = {
  UserController: new UserController(),
};
