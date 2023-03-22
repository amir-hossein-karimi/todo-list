const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const { createError } = require("../errors");
const TODO = require("../model/todo.model");
const {
  createTodoValidatorSchema,
  updateTodoValidatorSchema,
} = require("../validators/todos.validator");

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

  async getOne(req, res) {
    try {
      const id = req.params.get("id");

      if (!id) {
        throw {
          message: "id is required",
          statusCode: StatusCodes.BAD_REQUEST,
        };
      }

      const todo = await new TODO().getById(id, { userId: req.user._id });

      if (todo) {
        res.write(
          JSON.stringify({
            success: true,
            statusCode: 200,
            data: todo,
          })
        );
        return res.end();
      } else {
        throw {
          message: "todo not found",
          statusCode: StatusCodes.BAD_REQUEST,
        };
      }
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

  async update(req, res) {
    try {
      const id = req.params.get("id");

      if (!id) {
        throw {
          message: "id is required",
          statusCode: StatusCodes.BAD_REQUEST,
        };
      }

      const dataValue = await updateTodoValidatorSchema.validateAsync(req.body);

      const updateRes = await new TODO().update({ _id: id }, dataValue);

      res.write(
        JSON.stringify({
          success: true,
          statusCode: 200,
          data: updateRes,
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

  delete(req, res) {
    res.write("delete");
    res.end();
  }
}

module.exports = {
  TodosController: new TodosController(),
};
