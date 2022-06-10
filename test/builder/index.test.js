const helpers = require('../../builder/helpers');

const { albumsWithCoverArt, sortedAlbums: albumsSortedByYear } = require('../fixtures');

describe('builder', () => {
  describe('sortAlbumsByYear', () => {
    test('it should return an array of albums sorted by year', async () => {
      const sortedAlbums = await helpers.sortAlbumsByYear(albumsWithCoverArt);
      let albumsAreSorted = true;
      for (let index = 1; index < sortedAlbums.length && albumsAreSorted; index++) {
        const currentAlbum = sortedAlbums[index];
        const previousAlbum = sortedAlbums[index - 1];
        const yearsAreCorrectlySorted = currentAlbum.year >= previousAlbum.year;
        const namesAreCorrectlySorted = currentAlbum.name > previousAlbum.name;
        const yearsMatch = currentAlbum.year === previousAlbum.year;
        if (!yearsAreCorrectlySorted) {
          albumsAreSorted = false;
        } else if (yearsMatch && !namesAreCorrectlySorted) {
          albumsAreSorted = false;
        }
      }
      expect(albumsAreSorted).toBe(true);
    });
  });

  describe('groupAlbumsByDecade', () => {
    test('it should return an array of decades with the value, displayName and albums properties', async () => {
      const albumsByDecade = await helpers.groupAlbumsByDecade(albumsSortedByYear);
      const propertyExists = (obj, property) => obj[property] !== undefined;
      const albumsWereGroupedCorrectly = albumsByDecade.every(
        (decade) =>
          propertyExists(decade, 'value') &&
          propertyExists(decade, 'displayName') &&
          propertyExists(decade, 'albums')
      );
      expect(albumsWereGroupedCorrectly).toBe(true);
    });
  });
});
