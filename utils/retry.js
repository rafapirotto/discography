const logger = require('../logger');
const { MAX_RETRIES, RETRY_INCREMENT_IN_MS } = require('./constants');

const handleMaxRetries = (retries, albumName) => {
  if (retries === MAX_RETRIES) {
    // we just tell the user that there won't be more retries for that card
    logger.error(`Maximum number of retries reached for ${albumName}`);
  }
};

const successCallback = (albumName) => {
  logger.info(`${albumName} album was added successfully`);
};

const convertMillisecondsToSeconds = (timeInMilliseconds) => timeInMilliseconds / 1000;

const logWarningMessage = (waitTime, albumName) => {
  const timeFrame = waitTime > 1000 ? 'seconds' : 'second';
  const waitTimeInSeconds = convertMillisecondsToSeconds(waitTime);
  logger.warn(
    `There was an issue trying to add ${albumName}, retrying in ${waitTimeInSeconds} ${timeFrame}...`
  );
};

// obtained from https://stackoverflow.com/questions/14249506/how-can-i-wait-in-node-js-javascript-l-need-to-pause-for-a-period-of-time
const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// obtained from https://stackoverflow.com/questions/14249506/how-can-i-wait-in-node-js-javascript-l-need-to-pause-for-a-period-of-time
const sleep = async (fn, ms) => {
  await timeout(ms);
  return fn();
};

/**
 * Retries a function when it fails. If 'retries' reaches 'MAX_RETRIES', an exception is thrown.
 * @param {function} callback - Function we want to retry.
 * @param {object} callbackParams - The params which the callback was called with.
 * @param {number} retries - Current number of retries.
 * @param {number} waitTime - Amount of time that has to pass before the next try.
 */
const retry = async (callback, callbackParams, retries, waitTime) => {
  const { albumName } = callbackParams;
  handleMaxRetries(retries, albumName);
  callback()
    .then(() => successCallback(albumName))
    .catch(async () => {
      logWarningMessage(waitTime, albumName);
      const nextWaitTime = waitTime + RETRY_INCREMENT_IN_MS;
      const nextRetryCall = () => retry(callback, callbackParams, retries + 1, nextWaitTime);
      await sleep(nextRetryCall, waitTime);
    });
};

module.exports = { retry };
