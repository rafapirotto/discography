const axios = require('axios');

const { BASE_URL, DEFAULT_COVER_ART_URL, ARTIST } = require('./constants');
const logger = require('../logger');
const spotifyToken = require('./TokenSingleton');

const buildUrl = (albumName) => {
  const query = encodeURIComponent(`${ARTIST} ${albumName}`);
  const searchUrl = `${BASE_URL}/v1/search?type=album&q=${query}`;
  return searchUrl;
};

const getRequestOptions = (token) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return options;
};

const extractCoverArt = (data) => data?.albums?.items?.[0]?.images?.[0]?.url;

const handleError = () => {
  // if there is a problem with the spotify api, then just return the default value for the cover art
  // the main purpose is to create the board, so we shouldn't stop execution if the cover art is unavailable
  logger.warn('There was a problem getting the cover art. Default value will be used.');
  return DEFAULT_COVER_ART_URL;
};

/**
 * Gets the cover art for an album.
 * @param {string} albumName - Album name.
 * @returns {string} - Cover art for the corresponding album. If no one was found, DEFAULT_COVER_ART_URL is returned
 */
const getCoverArt = async (albumName) => {
  // singleton on token to avoid creating one for each new request, which would cause overhead
  try {
    const token = await spotifyToken.getInstance();
    const url = buildUrl(albumName);
    const options = await getRequestOptions(token);
    const { data } = await axios.get(url, options);
    const coverArt = extractCoverArt(data);
    return coverArt || DEFAULT_COVER_ART_URL;
  } catch (error) {
    return handleError();
  }
};

module.exports = { getCoverArt };
