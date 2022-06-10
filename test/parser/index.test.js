const { InvalidPathError } = require('../../exceptions');
const { parseAlbumsFromFile } = require('../../parser');

describe('parser', () => {
  describe('parseAlbumsFromFile:success', () => {
    test('it should return an array of objects with the year and name properties', async () => {
      const path = 'assets/discography.txt';
      const albums = await parseAlbumsFromFile(path);
      const propertyExists = (obj, property) => obj[property] !== undefined;
      const albumsWereParsedCorrectly = albums.every(
        (album) => propertyExists(album, 'year') && propertyExists(album, 'name')
      );
      expect(albumsWereParsedCorrectly).toBe(true);
    });
  });
  describe('parseAlbumsFromFile:error', () => {
    test('it should throw an InvalidPathError exception', async () => {
      const invalidPath = 'invalid/path/discography.txt';
      try {
        await parseAlbumsFromFile(invalidPath);
      } catch (error) {
        expect(error instanceof InvalidPathError).toBe(true);
      }
    });
  });
});
