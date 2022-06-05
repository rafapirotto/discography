const axios = require('axios');
require('dotenv').config({ path: '../../.env' });

const { BOARD_NAME, BOARD_DESCRIPTION, BASE_URL } = require('./constants');
const { DEFAULT_COVER_ART_URL } = require('../spotify/constants');
const { getEnvVariable } = require('../utils');

const TRELLO_API_KEY = getEnvVariable('TRELLO_API_KEY');
const TRELLO_TOKEN = getEnvVariable('TRELLO_TOKEN');
const AUTH_SECTION = `key=${TRELLO_API_KEY}&token=${TRELLO_TOKEN}`;

const createBoard = async () => {
  try {
    const boardValues = { name: BOARD_NAME, defaultLists: false, desc: BOARD_DESCRIPTION };
    const queryParams = new URLSearchParams(boardValues);
    const createBoardUrl = `${BASE_URL}/1/boards/?${AUTH_SECTION}&${queryParams}`;
    const { data } = await axios.post(createBoardUrl);

    return data?.id;
  } catch (error) {
    console.log(error.message);
  }
};

const createList = async (boardId, name) => {
  try {
    const listValues = { name, pos: 'bottom' };
    const queryParams = new URLSearchParams(listValues);
    const createListUrl = `${BASE_URL}/1/boards/${boardId}/lists?${AUTH_SECTION}&${queryParams}`;
    const { data } = await axios.post(createListUrl);

    return data?.id;
  } catch (error) {
    console.log(error.message);
  }
};

const addCardToList = (cardName, listId, position) => {
  try {
    const cardValues = {
      name: cardName,
      idList: listId,
      pos: position,
    };
    const queryParams = new URLSearchParams(cardValues);
    const addCardUrl = `${BASE_URL}/1/cards?${AUTH_SECTION}&${queryParams}`;

    axios.post(addCardUrl);
  } catch (error) {
    console.log(error.message);
  }
};

const addCardsToList = (listId, albums) => {
  try {
    let cardPosition = 1;
    for (const album of albums) {
      const cardName = `${album.year} - ${album.name}`;
      // await is not needed since we use 'cardPosition' to insert in the correct order
      addCardToList(cardName, listId, cardPosition);
      cardPosition++;
    }
  } catch (error) {
    console.log(error.message);
  }
};

const addDataToBoard = async (boardId, boardData) => {
  for (const decade of boardData) {
    const listId = await createList(boardId, decade.displayName);
    addCardsToList(listId, decade.albums);
  }
};

module.exports = { createBoard, addDataToBoard };
