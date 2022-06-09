const CustomError = require('./CustomError');

class BoardCreationLimitError extends CustomError {
  constructor() {
    super('Cannot create board, maximum number of created boards reached');
  }
}

module.exports = BoardCreationLimitError;
