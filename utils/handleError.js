const logger = require('../logger');
const CustomError = require('../exceptions/CustomError');

/**
 * Decides and logs the correct message based on the type of error.
 * @param {object} error - A thrown error.
 */
const handleError = (error) => {
  let message = null;
  const isCustomError = error instanceof CustomError;
  message = isCustomError ? `${error.message}` : 'Unexpected error ocurred';
  logger.error(`${message}. Aborting...`);
};

module.exports = { handleError };
