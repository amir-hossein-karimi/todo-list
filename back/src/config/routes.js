const baseRoutes = require("../routes");

const notFound = (req, res) => {
  res.write(
    JSON.stringify({
      message: "this route not found",
      code: 404,
    })
  );
  res.end();
};

const configRoutes = (req, res, routeObject, callCount = 0) => {
  const currentCallCount = callCount + 1;
  const routes = routeObject || baseRoutes;
  const realUrl = req.url.split("?")[0];
  const originUrl = new URL(`${req.headers.host}${req.url}`);

  req.params = originUrl.searchParams;

  const url = realUrl.split("/")[currentCallCount];

  if (`/${url}` in routes) {
    Object.entries(routes).forEach(([key, value]) => {
      if (`/${url}` === key) {
        if (typeof value === "object" && !value?.method) {
          configRoutes(req, res, value, currentCallCount);
        } else {
          if (value.method.toLowerCase() !== req.method.toLowerCase()) {
            notFound(req, res);
          }

          let body = "";
          req.on("data", (chunk) => {
            body += chunk.toString(); // convert Buffer to string
          });
          req.on("end", () => {
            value.controller({ ...req, body: JSON.parse(body) }, res);
          });
        }
      }
    });
  } else {
    notFound(req, res);
  }
};

module.exports = configRoutes;
