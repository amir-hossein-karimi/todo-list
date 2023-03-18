const DB = require("../config/db");
const { COLLECTIONS } = require("../constants");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");

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
      res.writeHead(StatusCodes.INTERNAL_SERVER_ERROR);
      res.write(
        JSON.stringify({
          success: false,
          statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
          message: ReasonPhrases.INTERNAL_SERVER_ERROR,
        })
      );
      res.end();
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
