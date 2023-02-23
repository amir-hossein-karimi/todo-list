const baseRoutes = require("../routes");

const configRoutes = (req, res, routeObject, callCount = 0) => {
  const thisCallCount = callCount + 1;
  const routes = routeObject || baseRoutes;
  const url = req.url.split("/")[thisCallCount];

  if (`/${url}` in routes) {
    Object.entries(routes).forEach(([key, value]) => {
      if (`/${url}` === key) {
        if (typeof value === "object") {
          configRoutes(req, res, value, thisCallCount);
        } else {
          value(req, res);
        }
      }
    });
  } else {
    res.write(
      JSON.stringify({
        message: "this route not found",
        code: 404,
      })
    );
    res.end();
  }
};

module.exports = configRoutes;
