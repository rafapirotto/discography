const { getToken } = require('./utils');

class TokenSingleton {
  constructor() {
    this.token = (() => getToken())();
  }

  async getInstance() {
    return this.token;
  }
}

module.exports = new TokenSingleton();
