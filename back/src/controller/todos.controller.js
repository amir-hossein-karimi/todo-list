const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const { createError } = require("../errors");
const TODO = require("../model/todo.model");

class TodosController {
  async getAll(req, res) {
    try {
      const todos = await new TODO().all();

      res.write(
        JSON.stringify({
          success: true,
          statusCode: 200,
          data: todos,
        })
      );
      return res.end();
    } catch (error) {
      return createError(
        res,
        error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        error.message || ReasonPhrases.INTERNAL_SERVER_ERROR
      );
    }
  }

  create(req, res) {
    res.write("create");
    res.end();
  }

  update(req, res) {
    res.write("update");
    res.end();
  }

  delete(req, res) {
    res.write("delete");
    res.end();
  }
}

module.exports = {
  TodosController: new TodosController(),
};
