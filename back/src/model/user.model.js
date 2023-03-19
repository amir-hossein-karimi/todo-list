const { TYPES, ROLES } = require("../constants");
const { collectionInstance } = require("../utils/collectionInstance");
const validationBySchema = require("../validators/schema.validatore");

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
}

module.exports = USER;
