class UserController {
  all(req, res) {
    res.write("all users");
    res.end();
  }
}

module.exports = {
  UserController: new UserController(),
};
