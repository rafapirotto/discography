const DataProcessingError = require('../exceptions/DataProcessingError');
const logger = require('../logger');

const { sortAlbumsByYear, groupAlbumsByDecade } = require('./helpers');

const processDataForBoard = async (albums) => {
  try {
    logger.info('Processing data for board...');
    const sortedAlbums = sortAlbumsByYear(albums);
    return groupAlbumsByDecade(sortedAlbums);
  } catch (error) {
    throw new DataProcessingError();
  }
};

module.exports = { processDataForBoard };
