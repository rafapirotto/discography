const { parseAlbumsFromFile } = require('../../parser');

describe('parser', () => {
  describe('parseAlbumsFromFile', () => {
    test('it should return an array of objects with the year and name properties', async () => {
      const path = 'src/assets/discography.txt';
      const albums = await parseAlbumsFromFile(path);
      const propertyExists = (obj, property) => obj[property] !== undefined;
      const albumsWereParsedCorrectly = albums.every(
        (album) => propertyExists(album, 'year') && propertyExists(album, 'name')
      );
      expect(albumsWereParsedCorrectly).toBe(true);
    });
  });
});
