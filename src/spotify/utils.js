const axios = require('axios');

const { TOKEN_URL, SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = require('./constants');

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

/**
 * Obtains the token needed to perform the requests to the Spotify API.
 * @returns {string} - Token needed to perform the requests to the Spotify API.
 */
const getToken = async () => {
  const options = createRequestOptions(SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET);
  const { data } = await axios(options);
  return data?.access_token;
};

module.exports = { getToken };
