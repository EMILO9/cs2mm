const winston = require("winston");
const { combine, timestamp, printf, colorize } = winston.format;
module.exports = winston.createLogger({
  level: "debug",
  format: combine(
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    colorize(),
    printf(
      (info) =>
        `${info.timestamp} ${info.level} [${info.service}]: ${info.message}`
    )
  ),
  defaultMeta: { service: "dev.logger" },
  transports: [new winston.transports.Console()],
});
