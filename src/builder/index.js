const { sortAlbumsByYear, groupAlbumsByDecade } = require('./helpers');

const processDataForBoard = async (albums) => {
  const sortedAlbums = sortAlbumsByYear(albums);
  return groupAlbumsByDecade(sortedAlbums);
};

module.exports = { processDataForBoard };
