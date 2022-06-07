const { getToken } = require('./utils');

class Token {
  constructor() {
    this.token = null;
  }

  async getInstance() {
    if (this.token === null) {
      this.token = await getToken();
    }
    return this.token;
  }
}

module.exports = Token;
