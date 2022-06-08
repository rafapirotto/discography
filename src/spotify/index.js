const logger = require('../logger');

// dependency injection
const addCoverArt = async (albums, spotifyApi) => {
  logger.info('Adding cover arts...');
  const albumsWithCoverArt = await Promise.all(
    albums.map(async (album) => {
      const coverArt = await spotifyApi.getCoverArt(album.name);
      return { ...album, coverArt };
    })
  );
  return albumsWithCoverArt;
};

module.exports = { addCoverArt };
