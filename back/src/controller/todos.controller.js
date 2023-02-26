class TodosController {
  getAll(req, res) {
    res.write("todos");
    res.end();
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
