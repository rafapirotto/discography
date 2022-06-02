const axios = require('axios');

const { BOARD_NAME, BOARD_DESCRIPTION } = require('./constants');

const { TRELLO_API_KEY, TRELLO_TOKEN } = process.env;

const CREATE_BOARD_URL = `https://api.trello.com/1/boards/?name=${BOARD_NAME}&key=${TRELLO_API_KEY}&token=${TRELLO_TOKEN}`;

const createBoard = async () => {
  try {
    const requestParams = { defaultLists: false, desc: BOARD_DESCRIPTION };
    await axios.post(CREATE_BOARD_URL, requestParams);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createBoard };
