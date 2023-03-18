const baseRouteSchema = {
  method: "get",
  preHandler: [
    (req, res, done) => {
      console.log("this is first pre handler, keep going to second");
    },
    (req, res, done) => {
      console.log("this is second pre handler, its send data and stop running");

      // comment bottom codes to run controller
      res.write("this is base route(from second pre handler)");
      res.end();
      done();
    },
  ],
  controller: (req, res) => {
    console.log("this is controller, request is stoped you cant see this");
    res.write("this is base route (from controller)");
    res.end();
  },
};

module.exports = {
  baseRouteSchema,
};
