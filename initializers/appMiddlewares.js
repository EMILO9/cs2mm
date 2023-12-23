const helmet = require("helmet"),
  cors = require("cors");
module.exports = (app, express) => {
  app.use(helmet());
  app.use(cors({ origin: process.env.CORS_ORIGIN }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};
