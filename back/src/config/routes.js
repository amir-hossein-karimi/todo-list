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

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Request-Method", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  if (`/${url}` in routes) {
    Object.entries(routes).forEach(([key, value]) => {
      if (`/${url}` === key) {
        if (typeof value === "object" && !value?.method) {
          configRoutes(req, res, value, currentCallCount);
        } else {
          if (value.method.toLowerCase() !== req.method.toLowerCase()) {
            return notFound(req, res);
          }

          let body = "";
          req.on("data", (chunk) => {
            body += chunk.toString(); // convert Buffer to string
          });
          req.on("end", async () => {
            let request = {
              ...req,
              ...(body && { body: JSON.parse(body) }),
              headers: req.headers,
            };
            if ("preHandler" in value) {
              let isDone = false;
              for (let i = 0; i <= value.preHandler.length; i++) {
                if (isDone) {
                  break;
                }
                if (i === value.preHandler.length) {
                  setTimeout(() => {
                    value.controller(request, res);
                  }, 2000);
                } else {
                  await value.preHandler[i](
                    request,
                    res,
                    () => {
                      isDone = true;
                    },
                    (data) => {
                      request = { ...request, ...data };
                    }
                  );
                }
              }
            } else {
              setTimeout(() => {
                value.controller(request, res);
              }, 2000);
            }
          });
        }
      }
    });
  } else {
    notFound(req, res);
  }
};

module.exports = configRoutes;
