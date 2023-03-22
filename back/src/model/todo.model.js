const { ReasonPhrases, StatusCodes } = require("http-status-codes");
const { TYPES, TODO_STATUS, COLLECTIONS } = require("../constants");
const { collectionInstance } = require("../utils/collectionInstance");
const validationBySchema = require("../validators/schema.validator");
const { ObjectId } = require("mongodb");

const todoSchema = {
  title: { type: TYPES.STRING, required: true },
  description: { type: TYPES.STRING, defaultValue: "" },
  status: {
    type: TYPES.STRING,
    defaultValue: TODO_STATUS.TODO,
    acceptdValues: [...Object.values(TODO_STATUS)],
  },
  userId: { type: TYPES.OBJECT_ID, required: true },
};

class TODO {
  async all(findBy = {}) {
    const todoModel = await collectionInstance(COLLECTIONS.TODOS);

    const todos = await todoModel.find(findBy).toArray();

    return todos;
  }

  async getOne(data) {
    if ("_id" in data) return await this.getById(data._id);

    const todoModel = await collectionInstance(COLLECTIONS.TODOS);

    const todo = await todoModel.find(data).toArray();

    return todo[0];
  }

  async getById(id) {
    if (!ObjectId.isValid(id)) {
      throw {
        message: "id is not valid",
        statusCode: StatusCodes.BAD_REQUEST,
      };
    }

    const todoModel = await collectionInstance(COLLECTIONS.TODOS);

    const todo = await todoModel.find({ _id: new ObjectId(id) }).toArray();

    return todo[0];
  }

  async create(data) {
    const { error, value } = validationBySchema(data, todoSchema);

    if (error) {
      throw { message: error, statusCode: StatusCodes.BAD_REQUEST };
    }

    const todoModel = await collectionInstance(COLLECTIONS.TODOS);
    const createRes = await todoModel.insertOne(value);

    if (createRes?.acknowledged) {
      return { message: "todo created successfully" };
    } else {
      throw {
        message: ReasonPhrases.INTERNAL_SERVER_ERROR,
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      };
    }
  }

  async update(findBy, replaceData) {
    const oldData = await this.getOne(findBy)

    if(oldData) {
      const newData = { ...oldData, ...replaceData };
      const { error, value } = validationBySchema(newData, todoSchema);

      if (error) {
        throw {
          message: error,
          statusCode: StatusCodes.BAD_REQUEST,
        };
      }

      const todoModel = await collectionInstance(COLLECTIONS.TODOS);
      const updateRes = await todoModel.replaceOne(
        { _id: new ObjectId(oldData._id) },
        value
      );

      if (updateRes.modifiedCount) {
        return { message: "todo updated successfully" };
      } else {
        throw {
          message: ReasonPhrases.INTERNAL_SERVER_ERROR,
          statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        };
      }
    }else {
      throw {
        message: "todo not found",
        statusCode: StatusCodes.BAD_REQUEST
      }
    }
  }

  delete(findBy) {}
}

module.exports = TODO;
