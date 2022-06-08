const logger = require('../logger');

const { MAX_RETRIES, DEFAULT_RETRY_FACTOR, MAX_RETRIES_ERROR } = require('./constants');

// obtained from https://stackoverflow.com/questions/14249506/how-can-i-wait-in-node-js-javascript-l-need-to-pause-for-a-period-of-time
// eslint-disable-next-line no-promise-executor-return
const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// obtained from https://stackoverflow.com/questions/14249506/how-can-i-wait-in-node-js-javascript-l-need-to-pause-for-a-period-of-time
const sleep = async (fn, ms) => {
  await timeout(ms);
  return fn();
};

/**
 * Retries a function when it fails. If 'retries' reaches 'MAX_RETRIES', an exception is thrown.
 * @param {function} callback - Function we want to retry.
 * @param {number} retries - Current number of retries.
 * @param {number} retryFactor - Linear factor to use when retrying.
 */
const retry = async (callback, retries = 0, retryFactor = DEFAULT_RETRY_FACTOR) => {
  if (retries === MAX_RETRIES) {
    logger.error(`Maximum number of retries reached`);
    throw new Error(MAX_RETRIES_ERROR);
  }

  callback().catch(async () => {
    await sleep(() => retry(callback, retries + 1), retryFactor * retries);
  });
};

module.exports = { retry };
