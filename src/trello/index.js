const axios = require('axios');
require('dotenv').config({ path: '../../.env' });

const { BOARD_NAME, BOARD_DESCRIPTION, BASE_URL } = require('./constants');

const { TRELLO_API_KEY, TRELLO_TOKEN } = process.env;
const AUTH_SECTION = `key=${TRELLO_API_KEY}&token=${TRELLO_TOKEN}`;

const createBoard = async () => {
  const createBoardUrl = `${BASE_URL}/1/boards/?${AUTH_SECTION}`;

  try {
    const requestParams = { name: BOARD_NAME, defaultLists: false, desc: BOARD_DESCRIPTION };
    const { data } = await axios.post(createBoardUrl, requestParams);

    return data?.id;
  } catch (error) {
    console.log(error.message);
  }
};

const createList = async (boardId, name) => {
  const createListUrl = `${BASE_URL}/1/boards/${boardId}/lists?${AUTH_SECTION}`;

  try {
    const requestParams = { name, pos: 'bottom' };
    const { data } = await axios.post(createListUrl, requestParams);

    return data?.id;
  } catch (error) {
    console.log(error.message);
  }
};

const addCardToList = (cardName, listId, position) => {
  const addCardUrl = `${BASE_URL}/1/cards?${AUTH_SECTION}`;

  try {
    const requestParams = { name: cardName, idList: listId, pos: position };
    axios.post(addCardUrl, requestParams);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { createBoard, createList, addCardToList };
