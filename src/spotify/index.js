// dependency injection
const addCoverArt = async (albums, spotifyApi) => {
  const albumsWithCoverArt = await Promise.all(
    albums.map(async (album) => {
      const coverArt = await spotifyApi.getCoverArt(album.name);
      return { ...album, coverArt };
    })
  );
  return albumsWithCoverArt;
};

module.exports = { addCoverArt };
