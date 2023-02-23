class AuthController {
  register(req, res) {
    res.write("register");
    res.end();
  }
}

module.exports = {
  AuthController: new AuthController(),
};
