const { TYPES, TODO_STATUS } = require("../constants");

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
    all() {
        
    }

    getOne(data) {

    }

    getById(id) {

    }

    create(data) {

    }

    update(findBy, replaceData) {

    }

    delete(findBy) {

    }
}

module.exports = TODO