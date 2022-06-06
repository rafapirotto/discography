// dependency injection
const getDataForBoard = async ({ parserHelpers, spotifyApi }) => {
  const pathToFile = 'src/assets/discography.txt';
  const parsedAlbums = await parserHelpers.getAlbumsFromFile(pathToFile);
  const albumsWithCoverArt = await parserHelpers.addCoverArt(parsedAlbums, spotifyApi);
  const sortedAlbums = parserHelpers.sortAlbumsByYear(albumsWithCoverArt);
  const albumsByDecade = parserHelpers.groupAlbumsByDecade(sortedAlbums);
  return albumsByDecade;
};

module.exports = { getDataForBoard };
