const winston = require("winston");
const { format, createLogger, transports } = winston;
const { combine, timestamp, prettyPrint } = format;

const configureObect = {
  format: combine(
    timestamp({
      format: "MMM-DD-YYYY HH:mm:ss",
    }),
    format.errors({ stack: true }),
    prettyPrint()
  ),
  transports: [
    new transports.File({
      level: "debug",
      filename: "logs/debug.log",
    }),
  ],
};

const logger = createLogger(configureObect);

module.exports = logger;
