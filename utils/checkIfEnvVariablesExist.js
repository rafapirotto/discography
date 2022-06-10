const fs = require('fs').promises;

const logger = require('../logger');
const EnvVariableMissingError = require('../exceptions/EnvVariableMissingError');
const { getEnvVariable } = require('./getEnvVariable');

const checkIfVariableExists = async (item) => {
  const key = item.split('=')[0];
  const envVariable = getEnvVariable(key);
  if (!envVariable) {
    throw new EnvVariableMissingError(key);
  }
};

/**
 * Checks if all of the necessary env variables exist, otherwise it throws an exception.
 */
const checkIfEnvVariablesExist = async () => {
  logger.info('Loading env variables...');
  const path = './.env.sample';
  const data = (await fs.readFile(path)).toString().split('\n');
  data.forEach((item) => {
    if (item) {
      checkIfVariableExists(item);
    }
  });
  logger.info('All env variables found');
};

module.exports = { checkIfEnvVariablesExist };
