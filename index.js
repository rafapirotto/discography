require('dotenv').config();

const trelloApi = require('./src/trello');
const parser = require('./src/parser');
const builder = require('./src/builder');
const { addCoverArt } = require('./src/spotify');
const spotifyApi = require('./src/spotify/api');
const logger = require('./src/logger');

const buildBoard = async (path) => {
  const boardId = await trelloApi.createBoard();
  const parsedAlbums = await parser.parseAlbumsFromFile(path);
  const albumsWithCoverArt = await addCoverArt(parsedAlbums, spotifyApi);
  const processedData = await builder.processDataForBoard(albumsWithCoverArt);
  await trelloApi.addDataToBoard(boardId, processedData);
};

try {
  buildBoard('src/assets/discography.txt');
} catch (error) {
  logger.error(error.message);
}
