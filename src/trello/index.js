const axios = require('axios');

const { BOARD_NAME, BOARD_DESCRIPTION, BASE_URL, AUTH_SECTION } = require('./constants');
const { retry } = require('../utils');
const logger = require('../logger');
const BoardCreationLimit = require('../exceptions/BoardCreationLimitError');

/**
 * Creates a board and returns its id.
 * @returns {string} - Id of the created board.
 */
const createBoard = async () => {
  logger.info('Creating board...');
  const boardValues = { name: BOARD_NAME, defaultLists: false, desc: BOARD_DESCRIPTION };
  const queryParams = new URLSearchParams(boardValues);
  const createBoardUrl = `${BASE_URL}/1/boards/?${AUTH_SECTION}&${queryParams}`;
  return axios
    .post(createBoardUrl)
    .then(({ data }) => {
      logger.info(`Board link: ${data?.url}`);
      return data?.id;
    })
    .catch(() => {
      throw new BoardCreationLimit();
    });
};

const createList = async (boardId, name) => {
  const listValues = { name, pos: 'bottom' };
  const queryParams = new URLSearchParams(listValues);
  const createListUrl = `${BASE_URL}/1/boards/${boardId}/lists?${AUTH_SECTION}&${queryParams}`;
  const { data } = await axios.post(createListUrl);
  logger.info(`${name} list created`);
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
  // forEach is used over for of due to performance: https://leanylabs.com/blog/js-forEach-map-reduce-vs-for-for_of/
  albums.forEach((album, index) => {
    const { year, name, coverArt } = album;
    const cardName = `${year} - ${name}`;
    const callbackParams = { albumName: name };
    const callback = () => addCardToList(cardName, listId, index + 1, coverArt);
    retry(callback, callbackParams);
  });
};

const createLists = async (boardId, boardData) => {
  const lists = [];
  // for of is used due to this: https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop
  for (const decade of boardData) {
    try {
      const listId = await createList(boardId, decade.displayName);
      lists.push({ listId, albums: decade.albums });
    } catch (error) {
      logger.warn(
        `The ${decade.displayName} list could not be created, hence cards referred to this list won't be added.`
      );
    }
  }
  return lists;
};

/**
 * Adds 'boardData' to the board corresponding to the 'boardId'.
 * @param {string} boardId - Id of the board we want to insert lists and cards to.
 * @param {object} boardData - Data we want to insert to the board; lists and cards.
 */
const addDataToBoard = async (boardId, boardData) => {
  logger.info('Adding data to board...');
  const lists = await createLists(boardId, boardData);
  // forEach is used over for of due to performance: https://leanylabs.com/blog/js-forEach-map-reduce-vs-for-for_of/
  lists.forEach(({ listId, albums }) => {
    addCardsToList(listId, albums);
  });
};

module.exports = { createBoard, addDataToBoard };
