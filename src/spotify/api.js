const axios = require('axios');

const { BASE_URL, DEFAULT_COVER_ART_URL, ARTIST } = require('./constants');
const logger = require('../logger');

const SpotifyToken = require('./token');

const spotifyToken = new SpotifyToken();
/**
 * Gets the cover art for an album.
 * @param {string} albumName - Album name.
 * @returns {string} - Cover art for the corresponding album. If no one was found, DEFAULT_COVER_ART_URL is returned
 */
const getCoverArt = async (albumName) => {
  // singleton on token to avoid creating one for each new request, which would cause overhead
  try {
    const token = await spotifyToken.getInstance();
    const query = encodeURIComponent(`${ARTIST} ${albumName}`);
    const searchUrl = `${BASE_URL}/v1/search?type=album&q=${query}`;
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(searchUrl, options);
    return data?.albums?.items?.[0]?.images?.[0]?.url || DEFAULT_COVER_ART_URL;
  } catch (error) {
    // if there is a problem with the spotify api, then just return the default value for the cover art
    // the main purpose is to create the board, so we shouldn't stop execution if the cover art is unavailable
    logger.warn('There was a problem getting the cover art. Default value will be used.');
    return DEFAULT_COVER_ART_URL;
  }
};

module.exports = { getCoverArt };
