const { TYPES, ROLES } = require("../constants");
const { collectionInstance } = require("../utils/collectionInstance");

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
}

module.exports = USER;
