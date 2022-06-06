const axios = require('axios');

const { BOARD_NAME, BOARD_DESCRIPTION, BASE_URL } = require('./constants');
const { getEnvVariable, retry } = require('../utils');

const TRELLO_API_KEY = getEnvVariable('TRELLO_API_KEY');
const TRELLO_TOKEN = getEnvVariable('TRELLO_TOKEN');
const AUTH_SECTION = `key=${TRELLO_API_KEY}&token=${TRELLO_TOKEN}`;

const createBoard = async () => {
  const boardValues = { name: BOARD_NAME, defaultLists: false, desc: BOARD_DESCRIPTION };
  const queryParams = new URLSearchParams(boardValues);
  const createBoardUrl = `${BASE_URL}/1/boards/?${AUTH_SECTION}&${queryParams}`;
  const { data } = await axios.post(createBoardUrl);
  return data?.id;
};

const createList = async (boardId, name) => {
  const listValues = { name, pos: 'bottom' };
  const queryParams = new URLSearchParams(listValues);
  const createListUrl = `${BASE_URL}/1/boards/${boardId}/lists?${AUTH_SECTION}&${queryParams}`;
  const { data } = await axios.post(createListUrl);
  return data?.id;
};

const addCardToList = (cardName, listId, position, coverArt) => {
  const cardValues = {
    name: cardName,
    idList: listId,
    pos: position,
    urlSource: coverArt,
  };
  const queryParams = new URLSearchParams(cardValues);
  const addCardUrl = `${BASE_URL}/1/cards?${AUTH_SECTION}&${queryParams}`;
  return axios.post(addCardUrl);
};

const addCardsToList = async (listId, albums) => {
  albums.forEach((album, index) => {
    const { year, name, coverArt } = album;
    const cardName = `${year} - ${name}`;
    // await is not needed since we use the index to insert in the correct order
    retry(() => addCardToList(cardName, listId, index + 1, coverArt));
  });
};

const createLists = async (boardId, boardData) => {
  const lists = [];
  for (const decade of boardData) {
    const listId = await createList(boardId, decade.displayName);
    lists.push({ listId, albums: decade.albums });
  }
  return lists;
};

const addDataToBoard = async (boardId, boardData) => {
  const lists = await createLists(boardId, boardData);
  lists.forEach(({ listId, albums }) => {
    addCardsToList(listId, albums);
  });
};

module.exports = { createBoard, addDataToBoard };
