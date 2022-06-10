const CustomError = require('./CustomError');

class DataProcessingError extends CustomError {
  constructor() {
    super('There was a problem processing the data');
  }
}

module.exports = DataProcessingError;
