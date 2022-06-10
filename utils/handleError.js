const logger = require('../logger');
const CustomError = require('../exceptions/CustomError');

/**
 * Decides and logs the correct message based upon the type of error.
 * @param {object} error - An error thrown.
 * @returns {object} - The appropiate message based on the error.
 */
const handleError = (error) => {
  let message = null;
  const isCustomError = error instanceof CustomError;
  message = isCustomError ? `${error.message}` : 'Unexpected error ocurred';
  logger.error(`${message}. Aborting...`);
  return message;
};

module.exports = { handleError };
