const { TYPES } = require("../constants");

const categorySchema = {
  name: { type: TYPES.STRING, required: true },
  subTodos: { type: TYPES.ARRAY, defaultValue: [] },
};

class CATEGORY {
  all() {}

  getById() {}

  getOne() {}

  create() {}

  update() {}

  delete() {}
}

module.exports = CATEGORY;
