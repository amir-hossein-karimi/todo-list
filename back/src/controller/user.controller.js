const { StatusCodes } = require("http-status-codes");
const { createError } = require("../errors");
const USER = require("../model/user.model");

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

  getOne(req, res) {
    res.write("one user");
    res.end();
  }

  create(req, res) {
    res.write("create a user");
    res.end();
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
