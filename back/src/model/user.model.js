const { TYPES, ROLES } = require("../constants");
const { collectionInstance } = require("../utils/collectionInstance");
const validationBySchema = require("../validators/schema.validatore");
const { ObjectId } = require("mongodb");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const userSchema = {
  username: { type: TYPES.STRING, required: true },
  password: { type: TYPES.STRING, required: true },
  token: { type: TYPES.STRING, defaultValue: "" },
  refreshToken: { type: TYPES.STRING, defaultValue: "" },
  role: {
    type: TYPES.STRING,
    defaultValue: ROLES.USER,
    acceptdValues: [...Object.values(ROLES)],
  },
};

class USER {
  async all() {
    const userModel = await collectionInstance("users");

    const users = await userModel.find({}).toArray();

    return users;
  }

  async create(data) {
    const { error, value } = validationBySchema(data, userSchema);

    if (error) {
      throw { message: error, statusCode: StatusCodes.BAD_REQUEST };
    }

    const userModel = await collectionInstance("users");

    const createRes = await userModel.insertOne(value);
    if (createRes?.acknowledged) {
      return { message: "user created successfully" };
    } else {
      throw {
        message: ReasonPhrases.INTERNAL_SERVER_ERROR,
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      };
    }
  }

  async getById(id) {
    if (!ObjectId.isValid(id)) {
      throw {
        message: "id is not valid",
        statusCode: StatusCodes.BAD_REQUEST,
      };
    }

    const userModel = await collectionInstance("users");
    const user = await userModel.find({ _id: new ObjectId(id) }).toArray();

    return user[0];
  }

  async getOne(data) {
    if ("_id" in data) return await this.getById(data._id);

    const userModel = await collectionInstance("users");
    const user = await userModel.find(data).toArray();

    return user[0];
  }

  async update(findData, replaceData) {
    const oldData = await this.getOne(findData);

    if (oldData) {
      const newData = { ...oldData, ...replaceData };
      const { error, value } = validationBySchema(newData, userSchema);

      if (error) {
        throw {
          message: error,
          statusCode: StatusCodes.BAD_REQUEST,
        };
      }

      const userModel = await collectionInstance("users");
      const updateRes = await userModel.replaceOne({ _id: oldData._id }, value);

      if (updateRes.modifiedCount) {
        return { message: "user updated successfully" };
      } else {
        throw {
          message: ReasonPhrases.INTERNAL_SERVER_ERROR,
          statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        };
      }
    } else {
      throw {
        message: "this user is not exist",
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      };
    }
  }
}

module.exports = USER;
