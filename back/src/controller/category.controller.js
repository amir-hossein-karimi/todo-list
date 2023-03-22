const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const { createError } = require("../errors");
const CATEGORY = require("../model/category.model");
const {
  categoryNameValidatorSchema,
} = require("../validators/category.validator");

class CategoryController {
  async getAll(req, res) {
    try {
      const categories = await new CATEGORY().all({ userId: req.user._id });

      res.write(
        JSON.stringify({
          success: true,
          statusCode: 200,
          data: categories,
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

      const category = await new CATEGORY().getById(id, {
        userId: req.user._id,
      });

      if (category) {
        res.write(
          JSON.stringify({
            success: true,
            statusCode: 200,
            data: category,
          })
        );
        return res.end();
      } else {
        throw {
          message: "category not found",
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
      const dataValue = await categoryNameValidatorSchema.validateAsync(
        req.body
      );

      const createRes = await new CATEGORY().create({
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

      const dataValue = await categoryNameValidatorSchema.validateAsync(
        req.body
      );

      const updateRes = await new CATEGORY().update(
        { _id: id, userId: req.user._id },
        dataValue
      );

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

  async delete(req, res) {
    try {
      const id = req.params.get("id");

      if (!id) {
        throw {
          message: "id is required",
          statusCode: StatusCodes.BAD_REQUEST,
        };
      }

      const deleteRes = await new CATEGORY().delete({
        _id: id,
        userId: req.user._id,
      });

      res.write(
        JSON.stringify({
          success: true,
          statusCode: 200,
          data: deleteRes,
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
}

module.exports = {
  CategoryController: new CategoryController(),
};
