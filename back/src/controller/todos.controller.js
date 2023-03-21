const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const { createError } = require("../errors");
const TODO = require("../model/todo.model");
const { createTodoValidatorSchema } = require("../validators/todos.validator");

class TodosController {
  async getAll(req, res) {
    try {
      const todos = await new TODO().all({ userId: req.user._id });

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

  async create(req, res) {
    try {
      const dataValue = await createTodoValidatorSchema.validateAsync(req.body);

      const createRes = await new TODO().create({
        ...dataValue,
        userId: req.user._id,
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
        error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        error.message || ReasonPhrases.INTERNAL_SERVER_ERROR
      );
    }
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
