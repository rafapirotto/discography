const CustomError = require('./CustomError');

class EnvVariableMissingError extends CustomError {
  constructor(key) {
    super(`Declaration for ${key} is missing in the .env file.`);
  }
}

module.exports = EnvVariableMissingError;
