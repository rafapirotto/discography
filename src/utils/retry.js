const { MAX_RETRIES, DEFAULT_INCREASING_INTERVAL, MAX_RETRIES_ERROR } = require('./constants');

// obtained from https://stackoverflow.com/questions/14249506/how-can-i-wait-in-node-js-javascript-l-need-to-pause-for-a-period-of-time
// eslint-disable-next-line no-promise-executor-return
const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// obtained from https://stackoverflow.com/questions/14249506/how-can-i-wait-in-node-js-javascript-l-need-to-pause-for-a-period-of-time
const sleep = async (fn, ms) => {
  await timeout(ms);
  return fn();
};

// 'retries' depicts how many times the callback has been called
const retry = async (callback, retries = 0, increasingInterval = DEFAULT_INCREASING_INTERVAL) => {
  if (retries === MAX_RETRIES) {
    throw new Error(MAX_RETRIES_ERROR);
  }
  callback().catch(async () => {
    await sleep(() => retry(callback, retries + 1), increasingInterval * retries);
  });
};

module.exports = { retry };
