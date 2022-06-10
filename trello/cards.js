const axios = require('axios');

const { BASE_URL, AUTH_SECTION } = require('./constants');
const { retry } = require('../utils');
const { INITIAL_WAIT_TIME_IN_MS } = require('../utils/constants');

const buildQueryParams = (cardName, listId, position, coverArt) => {
  const cardValues = {
    name: cardName,
    idList: listId,
    pos: position,
    urlSource: coverArt,
  };
  return new URLSearchParams(cardValues);
};

const buildUrl = (queryParams) => `${BASE_URL}/1/cards?${AUTH_SECTION}&${queryParams}`;

const addCardToList = (cardName, listId, position, coverArt) => {
  const queryParams = buildQueryParams(cardName, listId, position, coverArt);
  const addCardUrl = buildUrl(queryParams);
  return axios.post(addCardUrl);
};

/**
 * Adds 'albums' to the list of id 'listId'.
 * @param {string} listId - Id of the list we want to insert cards to.
 * @param {object} albums - Albums we want to insert to the list.
 */
const addCardsToList = async (listId, albums) => {
  // forEach is used over for of due to performance: https://leanylabs.com/blog/js-forEach-map-reduce-vs-for-for_of/
  albums.forEach((album, index) => {
    const { year, name, coverArt } = album;
    const cardName = `${year} - ${name}`;
    const callbackParams = { albumName: name };
    const callback = () => addCardToList(cardName, listId, index + 1, coverArt);
    retry(callback, callbackParams, 0, INITIAL_WAIT_TIME_IN_MS);
  });
};

module.exports = { addCardsToList };
