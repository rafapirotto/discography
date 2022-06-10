const { DataProcessingError } = require('../exceptions');
const logger = require('../logger');
const { sortAlbumsByYear, groupAlbumsByDecade } = require('./helpers');

/**
 * Processes the data that will be sent to the board. If a problem occurs during execution, an exception will be thrown
 * @param {Array<object>} albums - Albums to process.
 * @returns {Array<object>} - Processed data for board.
 */
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
