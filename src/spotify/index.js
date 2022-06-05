const axios = require('axios');

const { BASE_URL, TOKEN_URL, DEFAULT_COVER_ART_URL, ARTIST } = require('./constants');
const { getEnvVariable } = require('../utils');

const SPOTIFY_CLIENT_ID = getEnvVariable('SPOTIFY_CLIENT_ID');
const SPOTIFY_CLIENT_SECRET = getEnvVariable('SPOTIFY_CLIENT_SECRET');

const createRequestOptions = (clientId, clientSecret) => {
  const auth = new Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  const headers = {
    Authorization: `Basic ${auth}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  const params = {
    grant_type: 'client_credentials',
  };
  return { headers, params, method: 'post', url: TOKEN_URL, json: true };
};

const getToken = async () => {
  const options = createRequestOptions(SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET);
  const { data } = await axios(options);
  return data?.access_token;
};

const getCoverArt = async (albumName, token) => {
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

module.exports = { getCoverArt, getToken };
