const axios = require('axios');

const { BASE_URL, DEFAULT_COVER_ART_URL, ARTIST } = require('./constants');
const SpotifyToken = require('./token');

const spotifyToken = new SpotifyToken();

const getCoverArt = async (albumName) => {
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
