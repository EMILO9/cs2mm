const winston = require("winston");
module.exports = winston.createLogger({
  level: "debug",
  format: winston.format.json(),
  defaultMeta: { service: "prod.logger" },
  transports: [new winston.transports.Console()],
});
