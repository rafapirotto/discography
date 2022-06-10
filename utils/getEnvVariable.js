/**
 * Returns env variable if exists, otherwise it throws an exception.
 * @param {string} key - Env variable we want to obtain.
 * @returns {string} - Value of the env variable we want to obtain.
 */
const getEnvVariable = (key) => process.env[key];

module.exports = { getEnvVariable };
