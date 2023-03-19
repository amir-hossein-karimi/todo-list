const { TYPES, ROLES } = require("../constants");
const { collectionInstance } = require("../utils/collectionInstance");
const validationBySchema = require("../validators/schema.validatore");
const { ObjectId } = require("mongodb");
const { StatusCodes } = require("http-status-codes");

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

    return { data: users, error: false };
  }

  async create(data) {
    const { error, value } = validationBySchema(data, userSchema);

    if (error) {
      return { data: undefined, error };
    }

    const userModel = await collectionInstance("users");

    const createRes = await userModel.insertOne(value);
    if (createRes?.acknowledged) {
      return { error: false, data: { message: "user created successfully" } };
    } else {
      return { error: true, data: undefined };
    }
  }

  async getById(id) {
    if (!ObjectId.isValid(id)) {
      throw {
        message: "id is not valid",
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
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
}

module.exports = USER;
