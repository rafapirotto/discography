const axios = require('axios');

const { BASE_URL, AUTH_SECTION } = require('./constants');
const logger = require('../logger');

const buildQueryParams = (name) => {
  const listValues = { name, pos: 'bottom' };
  const queryParams = new URLSearchParams(listValues);
  return queryParams;
};

const buildUrl = (boardId, queryParams) =>
  `${BASE_URL}/1/boards/${boardId}/lists?${AUTH_SECTION}&${queryParams}`;

const createList = async (boardId, name) => {
  const queryParams = buildQueryParams(name);
  const createListUrl = buildUrl(boardId, queryParams);
  const { data } = await axios.post(createListUrl);
  logger.info(`${name} list created`);
  return data?.id;
};

/**
 * Creates and adds the lists based on the data from 'boardData'.
 * @param {string} boardId - Id of the board we want to insert lists to.
 * @param {object} boardData - The data from which the lists names will be obtained.
 * @returns {Array<object>} - The lists with their corresponding ids and albums.
 */
const createLists = async (boardId, boardData) => {
  const lists = [];
  // for of is used due to this: https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop
  for (const decade of boardData) {
    try {
      const listId = await createList(boardId, decade.displayName);
      lists.push({ listId, albums: decade.albums });
    } catch (error) {
      const errorMessage = `The ${decade.displayName} list could not be created, hence cards referred to this list won't be added.`;
      logger.warn(errorMessage);
    }
  }
  return lists;
};

module.exports = { createLists };
