const fs = require("fs").promises;
const path = require("path");
module.exports = async (app, db) => {
  const dir = path.join(__dirname, "..", "routes");
  const routes = await fs.readdir(dir);
  routes.forEach(route => require(path.join(dir, route))(app, db));
};
