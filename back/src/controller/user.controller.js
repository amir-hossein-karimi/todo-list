class UserController {
  all(req, res) {
    res.write("all users");
    res.end();
  }

  getOne(req, res) {
    res.write("one user");
    res.end();
  }

  create(req, res) {
    res.write("create a user");
    res.end();
  }

  update(req, res) {
    res.write("update a user");
    res.end();
  }

  delete(req, res) {
    res.write("delete user");
    res.end();
  }
}

module.exports = {
  UserController: new UserController(),
};
