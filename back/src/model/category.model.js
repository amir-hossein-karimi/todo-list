const { ReasonPhrases, StatusCodes } = require("http-status-codes");
const { TYPES, COLLECTIONS } = require("../constants");
const { collectionInstance } = require("../utils/collectionInstance");
const validationBySchema = require("../validators/schema.validator");
const { TYPES } = require("../constants");
const { ObjectId } = require("mongodb");
const TODO = require("./todo.model");

const categorySchema = {
  name: { type: TYPES.STRING, required: true },
  subTodos: { type: TYPES.ARRAY, defaultValue: [] },
  userId: { type: TYPES.OBJECT_ID, required: true },
};

class CATEGORY {
  async all(findBy = {}) {
    const categoryModel = await collectionInstance(COLLECTIONS.CATEGORIES);

    // aggrigate soon
    const categorys = await categoryModel.find(findBy).toArray();

    return categorys;
  }

  async getOne(data) {
    if ("_id" in data) return await this.getById(data._id, { ...data });

    const categoryModel = await collectionInstance(COLLECTIONS.CATEGORIES);

    const category = await categoryModel.find(data).toArray();

    return category[0];
  }

  async getById(id, otherData = {}) {
    if (!ObjectId.isValid(id)) {
      throw {
        message: "id is not valid",
        statusCode: StatusCodes.BAD_REQUEST,
      };
    }

    const categoryModel = await collectionInstance(COLLECTIONS.CATEGORIES);

    const category = await categoryModel
      .find({ ...otherData, _id: new ObjectId(id) })
      .toArray();

    return category[0];
  }

  async create(data) {
    const { error, value } = validationBySchema(data, categorySchema);

    if (error) {
      throw { message: error, statusCode: StatusCodes.BAD_REQUEST };
    }

    const categoryModel = await collectionInstance(COLLECTIONS.CATEGORIES);
    const createRes = await categoryModel.insertOne(value);

    if (createRes?.acknowledged) {
      return { message: "category created successfully" };
    } else {
      throw {
        message: ReasonPhrases.INTERNAL_SERVER_ERROR,
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      };
    }
  }

  async update(findBy, replaceData) {
    const oldData = await this.getOne(findBy);

    if (oldData) {
      const newData = { ...oldData, ...replaceData };
      const { error, value } = validationBySchema(newData, categorySchema);

      if (error) {
        throw {
          message: error,
          statusCode: StatusCodes.BAD_REQUEST,
        };
      }

      const categoryModel = await collectionInstance(COLLECTIONS.CATEGORIES);
      const updateRes = await categoryModel.replaceOne(
        { _id: new ObjectId(oldData._id) },
        value
      );

      if (updateRes.modifiedCount) {
        return { message: "category updated successfully" };
      } else {
        throw {
          message: ReasonPhrases.INTERNAL_SERVER_ERROR,
          statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        };
      }
    } else {
      throw {
        message: "category not found",
        statusCode: StatusCodes.BAD_REQUEST,
      };
    }
  }

  async addTodoToList(categoryId, todoId) {
    const category = await this.getById(categoryId);

    if (category) {
      const categoryModel = await collectionInstance(COLLECTIONS.CATEGORIES);
      const updateRes = await categoryModel.updateOne(
        { _id: new ObjectId(category._id) },
        { $push: { subTodos: todoId } }
      );

      if (updateRes.modifiedCount) {
        return { message: "todo add successfully" };
      } else {
        throw {
          message: ReasonPhrases.INTERNAL_SERVER_ERROR,
          statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        };
      }
    } else {
      throw {
        message: "category not found",
        statusCode: StatusCodes.BAD_REQUEST,
      };
    }
  }

  async removeTodoFromList(findBy, todoId) {
    const oldData = await this.getOne(findBy);

    if (oldData) {
      const categoryModel = await collectionInstance(COLLECTIONS.CATEGORIES);
      const updateRes = await categoryModel.updateOne(
        { _id: new ObjectId(oldData._id) },
        { $pull: { subTodos: todoId } }
      );

      if (updateRes.modifiedCount) {
        return { message: "todo removed successfully" };
      } else {
        throw {
          message: ReasonPhrases.INTERNAL_SERVER_ERROR,
          statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        };
      }
    } else {
      throw {
        message: "todo not found",
        statusCode: StatusCodes.BAD_REQUEST,
      };
    }
  }

  async delete(findBy) {
    const oldData = await this.getOne(findBy);

    if (oldData) {
      const categoryModel = await collectionInstance(COLLECTIONS.CATEGORIES);
      const deletedData = await categoryModel.deleteOne({
        _id: new ObjectId(oldData._id),
      });

      await new TODO().deleteManyId(oldData.subTodos);

      if (deletedData.deletedCount > 0) {
        return {
          message: "category deleted successfully",
        };
      } else {
        throw {
          message: ReasonPhrases.INTERNAL_SERVER_ERROR,
          statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        };
      }
    } else {
      throw {
        message: "this category is not exist",
        statusCode: StatusCodes.BAD_REQUEST,
      };
    }
  }
}

module.exports = CATEGORY;
