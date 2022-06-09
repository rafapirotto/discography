const { format, transports } = require('winston');

const { customLevels } = require('./customLevels');

const customFormat = format.printf(({ level, message }) => `[${level}]: ${message}`);

const transportsOptions = {
  format: format.combine(format.colorize(), customFormat),
  // obtained from https://stackoverflow.com/questions/38363292/disable-winston-logging-when-running-unit-tests
  silent: process.argv.indexOf('--silent') >= 0,
};

const logConfiguration = {
  levels: customLevels.levels,
  exitOnError: false,
  transports: [new transports.Console(transportsOptions)],
};

module.exports = { logConfiguration };
