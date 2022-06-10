const axios = require('axios');

const { BOARD_NAME, BOARD_DESCRIPTION, BASE_URL, AUTH_SECTION } = require('./constants');
const logger = require('../logger');
const BoardCreationLimit = require('../exceptions/BoardCreationLimitError');
const { createLists } = require('./lists');
const { addCardsToList } = require('./cards');

const buildQueryParams = () => {
  const boardValues = { name: BOARD_NAME, defaultLists: false, desc: BOARD_DESCRIPTION };
  const queryParams = new URLSearchParams(boardValues);
  return queryParams;
};

const buildUrl = (queryParams) => `${BASE_URL}/1/boards/?${AUTH_SECTION}&${queryParams}`;

/**
 * Creates a board and returns its id.
 * @returns {string} - Id of the created board.
 */
const createBoard = async () => {
  logger.info('Creating board...');
  const queryParams = buildQueryParams();
  const createBoardUrl = buildUrl(queryParams);
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

/**
 * Adds 'boardData' to the board of id 'boardId'.
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
