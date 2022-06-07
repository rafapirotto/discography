const { DEFAULT_COVER_ART_URL } = require('../../spotify/constants');
const { parsedAlbums } = require('../fixtures');
const { addCoverArt } = require('../../spotify');

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
});
