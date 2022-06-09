const logger = require('../logger');

const { MAX_RETRIES, INITIAL_WAIT_TIME_IN_MS, RETRY_INCREMENT_IN_MS } = require('./constants');

// obtained from https://stackoverflow.com/questions/14249506/how-can-i-wait-in-node-js-javascript-l-need-to-pause-for-a-period-of-time
// eslint-disable-next-line no-promise-executor-return
const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// obtained from https://stackoverflow.com/questions/14249506/how-can-i-wait-in-node-js-javascript-l-need-to-pause-for-a-period-of-time
const sleep = async (fn, ms) => {
  await timeout(ms);
  return fn();
};

const convertMillisecondsToSeconds = (timeInMilliseconds) => timeInMilliseconds / 1000;

/**
 * Retries a function when it fails. If 'retries' reaches 'MAX_RETRIES', an exception is thrown.
 * @param {function} callback - Function we want to retry.
 * @param {number} retries - Current number of retries.
 * @param {number} waitTime - Amount of time that has to pass before the next try.
 */
const retry = async (callback, callbackParams, retries = 0, waitTime = INITIAL_WAIT_TIME_IN_MS) => {
  const { albumName } = callbackParams;
  if (retries === MAX_RETRIES) {
    // we just tell the user that there won't be more retries for that card
    logger.error(`Maximum number of retries reached for ${albumName}`);
  }
  callback()
    .then(() => {
      logger.info(`${albumName} album was added successfully`);
    })
    .catch(async () => {
      const timeFrame = waitTime > 1000 ? 'seconds' : 'second';
      const waitTimeInSeconds = convertMillisecondsToSeconds(waitTime);
      logger.warn(
        `There was an issue trying to add ${albumName}, retrying in ${waitTimeInSeconds} ${timeFrame}...`
      );
      const nextWaitTime = waitTime + RETRY_INCREMENT_IN_MS;
      await sleep(() => retry(callback, callbackParams, retries + 1, nextWaitTime), waitTime);
    });
};

module.exports = { retry };
