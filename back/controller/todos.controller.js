class TodosController {
  getAll(req, res) {
    res.write("todos");
    res.end();
  }
}

module.exports = {
  TodosController: new TodosController(),
};
