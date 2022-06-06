require('dotenv').config();

const { getDataForBoard } = require('./src/parser');
const { createBoard, addDataToBoard } = require('./src/trello');
const parserHelpers = require('./src/parser/helpers');
const spotifyApi = require('./src/spotify');

const buildBoard = async () => {
  try {
    const { id: boardId, url } = await createBoard();
    console.log(url);
    const boardData = await getDataForBoard(parserHelpers, spotifyApi);

    addDataToBoard(boardId, boardData);
  } catch (error) {
    console.log(error);
  }
};

buildBoard();
