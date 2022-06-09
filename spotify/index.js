const logger = require('../logger');

/**
 * Gets and adds the cover art for all of the albums.
 * @param {Array<Object>} albums - Albums we want to get their cover arts.
 * @param {object} spotifyApi - Spotify API that includes the necessary functions to get the cover arts.
 * @returns {Array<Object>} - Albums with their cover arts.
 */
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
