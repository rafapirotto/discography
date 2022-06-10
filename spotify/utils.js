const axios = require('axios');

const { TOKEN_URL, SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = require('./constants');

const buildHeaders = (clientId, clientSecret) => {
  const auth = new Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  return { Authorization: `Basic ${auth}`, 'Content-Type': 'application/x-www-form-urlencoded' };
};

const buildParams = () => ({
  grant_type: 'client_credentials',
});

const createRequestOptions = (clientId, clientSecret) => {
  const headers = buildHeaders(clientId, clientSecret);
  const params = buildParams();
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
