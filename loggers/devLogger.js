const winston = require("winston");
module.exports = winston.createLogger({
  level: "debug",
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple()
  ),
  defaultMeta: { service: "dev.logger" },
  transports: [new winston.transports.Console()],
});
