require('dotenv').config();
const { getDataForBoard } = require('../../parser');
const helpers = require('../../parser/helpers');
const { DEFAULT_COVER_ART_URL } = require('../../spotify/constants');
const {
  parsedAlbums,
  albumsWithCoverArt,
  sortedAlbums: albumsSortedByYear,
  albumsByDecade: groupedAlbums,
} = require('../fixtures');

describe('Parser', () => {
  describe('helpers', () => {
    describe('getAlbumsFromFile', () => {
      test('should return an array of objects with the year and name properties', async () => {
        const path = 'src/assets/discography.txt';
        const albums = await helpers.getAlbumsFromFile(path);
        const propertyExists = (obj, property) => obj[property] !== undefined;
        const albumsWereParsedCorrectly = albums.every(
          (album) => propertyExists(album, 'year') && propertyExists(album, 'name')
        );
        expect(albumsWereParsedCorrectly).toBe(true);
      });
    });

    describe('addCoverArt', () => {
      test('should return an array of objects with the year, name and coverArt properties', async () => {
        // can also be done using 'mockImplementationOnce'
        const spotifyMockApi = {
          getCoverArt: () => DEFAULT_COVER_ART_URL,
        };
        const albums = await helpers.addCoverArt(parsedAlbums, spotifyMockApi);
        const propertyExists = (obj, property) => obj[property] !== undefined;
        const albumsWereParsedCorrectly = albums.every(
          (album) => propertyExists(album, 'year') && propertyExists(album, 'name')
        );
        expect(albumsWereParsedCorrectly).toBe(true);
      });
    });

    describe('sortAlbumsByYear', () => {
      test('should return an array of albums sorted by year', async () => {
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
      test('should return an array of decades with the value, displayName and albums properties', async () => {
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

  describe('getDataForBoard', () => {
    test('should return the correct data for the board', async () => {
      // can also be done using 'mockImplementationOnce'
      const parserMockedHelpers = {
        getAlbumsFromFile: () => [],
        addCoverArt: () => [],
        sortAlbumsByYear: () => [],
        groupAlbumsByDecade: () => groupedAlbums,
      };
      const spotifyMockApi = {
        getCoverArt: () => DEFAULT_COVER_ART_URL,
      };

      const dataForBoard = await getDataForBoard(parserMockedHelpers, spotifyMockApi);
      const propertyExists = (obj, property) => obj[property] !== undefined;
      const dataForBoardWasObtainedCorrectly = dataForBoard.every(
        (decade) =>
          propertyExists(decade, 'value') &&
          propertyExists(decade, 'displayName') &&
          propertyExists(decade, 'albums')
      );
      expect(dataForBoardWasObtainedCorrectly).toBe(true);
    });
  });
});
