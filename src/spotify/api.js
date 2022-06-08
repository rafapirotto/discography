const axios = require('axios');

const { BASE_URL, DEFAULT_COVER_ART_URL, ARTIST } = require('./constants');

const SpotifyToken = require('./token');

const spotifyToken = new SpotifyToken();
/**
 * Gets the cover art for an album.
 * @param {string} albumName - Album name.
 * @returns {string} - Cover art for the corresponding album. If no one was found, DEFAULT_COVER_ART_URL is returned
 */
const getCoverArt = async (albumName) => {
  // singleton on token to avoid creating one for each new request, which would cause overhead
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
};

module.exports = { getCoverArt };
