const { ReasonPhrases, StatusCodes } = require("http-status-codes");
const { TYPES, TODO_STATUS, COLLECTIONS } = require("../constants");
const { collectionInstance } = require("../utils/collectionInstance");
const validationBySchema = require("../validators/schema.validator");

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

  getOne(data) {}

  getById(id) {}

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

  update(findBy, replaceData) {}

  delete(findBy) {}
}

module.exports = TODO;
