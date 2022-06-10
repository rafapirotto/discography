const winston = require('winston');

const { customLevels } = require('./customLevels');
const { logConfiguration } = require('./logConfiguration');

winston.addColors(customLevels.colors);

const logger = winston.createLogger(logConfiguration);

module.exports = logger;
