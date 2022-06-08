/**
 * Returns env variable if exists, otherwise it throws an exception.
 * @param {string} key - Env variable we want to obtain.
 * @returns {string} - Value of the env variable we want to obtain.
 */
const getEnvVariable = (key) => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Declaration for ${key} is missing in the .env file.`);
  }
  return value;
};

module.exports = { getEnvVariable };
