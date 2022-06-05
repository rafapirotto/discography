const axios = require('axios');
require('dotenv').config({ path: '../../.env' });

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
  try {
    const options = createRequestOptions(SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET);
    const { data } = await axios(options);

    return data?.access_token;
  } catch (error) {
    console.log(error.message);
  }
};

const getCoverArt = async (albumName, token) => {
  const query = encodeURIComponent(`${ARTIST} ${albumName}`);
  const { data } = await axios.get(`${BASE_URL}/v1/search?type=album&q=${query}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data?.albums?.items[0]?.images?.[0]?.url || DEFAULT_COVER_ART_URL;
};

module.exports = { getCoverArt, getToken };
