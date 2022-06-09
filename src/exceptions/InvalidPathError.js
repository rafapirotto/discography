const CustomError = require('./CustomError');

class InvalidPathError extends CustomError {
  constructor() {
    super('Cannot parse file, invalid path provided');
  }
}

module.exports = InvalidPathError;
