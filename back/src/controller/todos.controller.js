const DB = require("../config/db");
const { COLLECTIONS } = require("../constants");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const { createError } = require("../errors");

class TodosController {
  async getAll(req, res) {
    try {
      const db = await new DB().mongo();

      const todos = await db.collection(COLLECTIONS.TODOS).find({}).toArray();

      res.write(
        JSON.stringify({
          success: true,
          statusCode: 200,
          data: todos,
        })
      );
      res.end();
    } catch (e) {
      console.log(e);
      createError(
        res,
        StatusCodes.INTERNAL_SERVER_ERROR,
        ReasonPhrases.INTERNAL_SERVER_ERROR
      );
    }
  }

  create(req, res) {
    res.write("create");
    res.end();
  }

  update(req, res) {
    res.write("update");
    res.end();
  }

  delete(req, res) {
    res.write("delete");
    res.end();
  }
}

module.exports = {
  TodosController: new TodosController(),
};
