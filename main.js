const express = require("express"),
  app = express(),
  http = require("http"),
  server = http.createServer(app),
  logger = require("./loggers/index.js");
app.set("view engine", "ejs");
(async () => {
  const db = await require("./initializers/mongodb")();
  require("./initializers/appMiddlewares")(app, express);
  await require("./initializers/initAPI.js")(app, db);
  require("./initializers/404Handler.js")(app);
  require("./initializers/errorHandler.js")(app);
  require("./initializers/initSocket.js")(server, db);
  await require("./initializers/initServer")(app);
})().catch(error => {
  logger.error(error);
  process.exit(1);
});
