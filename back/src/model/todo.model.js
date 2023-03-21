const { TYPES, TODO_STATUS, COLLECTIONS } = require("../constants");
const { collectionInstance } = require("../utils/collectionInstance");

const todoSchema = {
  title: { type: TYPES.STRING, required: true },
  description: { type: TYPES.STRING, defaultValue: "" },
  status: {
    type: TYPES.STRING,
    defaultValue: TODO_STATUS.TODO,
    acceptdValues: [...Object.values(TODO_STATUS)],
  },
};

class TODO {
  async all(findBy = {}) {
    const todoModel = await collectionInstance(COLLECTIONS.TODOS);

    const todos = await todoModel.find(findBy).toArray();

    return todos;
  }

  getOne(data) {}

  getById(id) {}

  create(data) {}

  update(findBy, replaceData) {}

  delete(findBy) {}
}

module.exports = TODO;
