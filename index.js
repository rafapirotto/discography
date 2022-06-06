require('dotenv').config();

const { getDataForBoard } = require('./src/parser');
const { createBoard, addDataToBoard } = require('./src/trello');
const parserHelpers = require('./src/parser/helpers');
const spotifyApi = require('./src/spotify');

const buildBoard = async () => {
  try {
    const boardId = await createBoard();
    const services = { parserHelpers, spotifyApi };
    const boardData = await getDataForBoard(services);

    addDataToBoard(boardId, boardData);
  } catch (error) {
    console.log(error);
  }
};

buildBoard();
