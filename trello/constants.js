const { getEnvVariable } = require('../utils');

const BOARD_NAME = "Bob Dylan's Discography";
const BOARD_DESCRIPTION = "This board shows all of Bob Dylan's Discography";
const BASE_URL = 'https://api.trello.com';
const TRELLO_API_KEY = getEnvVariable('TRELLO_API_KEY');
const TRELLO_TOKEN = getEnvVariable('TRELLO_TOKEN');
const AUTH_SECTION = `key=${TRELLO_API_KEY}&token=${TRELLO_TOKEN}`;

module.exports = {
  BOARD_NAME,
  BOARD_DESCRIPTION,
  BASE_URL,
  AUTH_SECTION,
};
