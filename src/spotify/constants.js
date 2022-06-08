const { getEnvVariable } = require('../utils');

const BASE_URL = 'https://api.spotify.com';
const TOKEN_URL = 'https://accounts.spotify.com/api/token';
const DEFAULT_COVER_ART_URL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/600px-Simple_Music.svg.png';
const ARTIST = 'Bob Dylan';
const SPOTIFY_CLIENT_ID = getEnvVariable('SPOTIFY_CLIENT_ID');
const SPOTIFY_CLIENT_SECRET = getEnvVariable('SPOTIFY_CLIENT_SECRET');

module.exports = {
  BASE_URL,
  TOKEN_URL,
  DEFAULT_COVER_ART_URL,
  ARTIST,
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
};
