require('dotenv').config();
const fs = require('fs').promises;

const trelloApi = require('./src/trello');
const parser = require('./src/parser');
const builder = require('./src/builder');
const { addCoverArt } = require('./src/spotify');
const spotifyApi = require('./src/spotify/api');
const logger = require('./src/logger');
const CustomError = require('./src/exceptions/CustomError');
const { getEnvVariable } = require('./src/utils');
const EnvVariableMissingError = require('./src/exceptions/EnvVariableMissingError');

const handleError = (error) => {
  if (error instanceof CustomError) {
    logger.error(`${error.message}. Aborting...`);
  } else {
    logger.error('Unexpected error ocurred');
  }
};

const checkForNecessaryEnvVariables = async (path) => {
  logger.info('Loading env variables...');
  const data = (await fs.readFile(path)).toString().split('\n');
  data.forEach((item) => {
    if (item) {
      const key = item.split('=')[0];
      const envVariable = getEnvVariable(key);
      if (!envVariable) {
        throw new EnvVariableMissingError(key);
      }
    }
  });
  logger.info('All env variables found');
};

const buildBoard = async (path) => {
  try {
    await checkForNecessaryEnvVariables('./.env.sample');
    const boardId = await trelloApi.createBoard();
    const parsedAlbums = await parser.parseAlbumsFromFile(path);
    const albumsWithCoverArt = await addCoverArt(parsedAlbums, spotifyApi);
    const processedData = await builder.processDataForBoard(albumsWithCoverArt);
    trelloApi.addDataToBoard(boardId, processedData);
  } catch (error) {
    handleError(error);
  }
};

buildBoard('src/assets/discography.txt');
