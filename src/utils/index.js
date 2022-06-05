const { MAX_RETRIES, DEFAULT_INCREASING_INTERVAL, MAX_RETRIES_ERROR } = require('./constants');

const getEnvVariable = (key) => {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Declaration for ${value} is missing in the .env file.`);
  }

  return value;
};

// obtained from https://stackoverflow.com/questions/14249506/how-can-i-wait-in-node-js-javascript-l-need-to-pause-for-a-period-of-time
const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// obtained from https://stackoverflow.com/questions/14249506/how-can-i-wait-in-node-js-javascript-l-need-to-pause-for-a-period-of-time
const sleep = async (fn, ms) => {
  await timeout(ms);
  return fn();
};

const retry = async (callback, retries = 0, increasingInterval = DEFAULT_INCREASING_INTERVAL) => {
  if (retries === MAX_RETRIES) {
    throw new Error(MAX_RETRIES_ERROR);
  }
  callback().catch(async () => {
    await sleep(() => retry(callback, retries + 1), increasingInterval * retries);
  });
};

module.exports = { getEnvVariable, retry };
