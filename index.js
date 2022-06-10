require('dotenv').config();

const trelloApi = require('./trello');
const parser = require('./parser');
const builder = require('./builder');
const { addCoverArt } = require('./spotify');
const spotifyApi = require('./spotify/api');
const { handleError, checkIfEnvVariablesExist } = require('./utils');

const runScript = async (path) => {
  try {
    await checkIfEnvVariablesExist();
    const boardId = await trelloApi.createBoard();
    const parsedAlbums = await parser.parseAlbumsFromFile(path);
    const albumsWithCoverArt = await addCoverArt(parsedAlbums, spotifyApi);
    const processedData = await builder.processDataForBoard(albumsWithCoverArt);
    trelloApi.addDataToBoard(boardId, processedData);
  } catch (error) {
    handleError(error);
  }
};

runScript('assets/discography.txt');
