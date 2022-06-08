const logger = require('../logger');

const { sortAlbumsByYear, groupAlbumsByDecade } = require('./helpers');

const processDataForBoard = async (albums) => {
  logger.info('Processing data for board..');
  const sortedAlbums = sortAlbumsByYear(albums);
  return groupAlbumsByDecade(sortedAlbums);
};

module.exports = { processDataForBoard };
