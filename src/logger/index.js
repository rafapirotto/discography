const winston = require('winston');

const { printf } = winston.format;

const customLevels = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
  },
  colors: {
    error: 'red',
    warn: 'yellow',
    info: 'blue',
  },
};
const customFormat = printf(({ level, message }) => `[${level}]: ${message}`);

const transportsOptions = {
  format: winston.format.combine(winston.format.colorize(), customFormat),
  // obtained from https://stackoverflow.com/questions/38363292/disable-winston-logging-when-running-unit-tests
  silent: process.argv.indexOf('--silent') >= 0,
};
const logConfiguration = {
  levels: customLevels.levels,
  exitOnError: false,
  transports: [new winston.transports.Console(transportsOptions)],
};

winston.addColors(customLevels.colors);

const logger = winston.createLogger(logConfiguration);

module.exports = logger;
