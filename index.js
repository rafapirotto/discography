/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
require('dotenv').config();

const { getDataForBoard } = require('./src/parser');
const { createBoard, createList, addCardToList } = require('./src/trello');

const buildBoard = async () => {
  console.time('duration: ');
  try {
    const boardId = await createBoard();
    const boardData = await getDataForBoard();
    for (const decade of boardData) {
      const listId = await createList(boardId, decade.displayName);
      let cardPosition = 1;
      for (const album of decade.albums) {
        const cardName = `${album.year} - ${album.name}`;
        // await is not needed since we use 'cardPosition' to insert in the correct order
        addCardToList(cardName, listId, cardPosition);
        cardPosition++;
      }
    }
    console.timeEnd('duration: ');
  } catch (error) {
    console.log(error.message);
  }
};

buildBoard();
