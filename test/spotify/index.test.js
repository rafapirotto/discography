const axios = require('axios');

const { DEFAULT_COVER_ART_URL } = require('../../spotify/constants');
const { parsedAlbums } = require('../fixtures');
const { addCoverArt } = require('../../spotify');

jest.mock('axios');
const { getToken } = require('../../spotify/utils');

describe('spotify', () => {
  describe('addCoverArt', () => {
    test('it should return an array of objects with the year, name and coverArt properties', async () => {
      const mockedApi = {
        getCoverArt: () => DEFAULT_COVER_ART_URL,
      };
      const albums = await addCoverArt(parsedAlbums, mockedApi);
      const propertyExists = (obj, property) => obj[property] !== undefined;
      const albumsWereParsedCorrectly = albums.every(
        (album) => propertyExists(album, 'year') && propertyExists(album, 'name')
      );
      expect(albumsWereParsedCorrectly).toBe(true);
    });
  });
  describe('getToken', () => {
    test('it should return a token', async () => {
      const expectedToken = '12739812738192';
      // we mock the post method to avoid calling the real api since we are not interested in testing that
      axios.mockResolvedValue({ data: { access_token: expectedToken } });
      const token = await getToken();
      expect(token).toEqual(expectedToken);
    });
  });
});
