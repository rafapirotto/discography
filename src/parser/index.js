const fs = require('fs').promises;

const { getCoverArt } = require('../spotify');

const getAlbumsFromFile = async () => {
  try {
    const data = (await fs.readFile('src/assets/discography.txt')).toString().split('\n');
    const validData = data.filter((album) => album.trim() !== '');
    const albums = validData.map((item) => {
      const [year, ...rest] = item.split(' ');
      const name = rest.join(' ');

      return { year, name };
    });
    return albums;
  } catch (error) {
    console.log(error.message);
  }
};

const sortAlbumsByYear = (albums) =>
  albums.sort((a, b) => {
    const result = a.year - b.year;
    if (result === 0) {
      return a.name > b.name ? 1 : -1;
    }
    return result;
  });

const groupAlbumsByDecade = (albums) => {
  const decades = [];
  albums.forEach(({ name, year, coverArt }) => {
    const decadeValue = +`${year[0]}${year[1]}${year[2]}0`;
    const decadeDisplayName = `${year[2]}0's`;
    const album = { name, year, coverArt };
    const foundDecade = decades.find((d) => d.value === decadeValue);

    if (foundDecade) {
      foundDecade.albums.push(album);
    } else {
      const newDecade = { value: decadeValue, displayName: decadeDisplayName, albums: [album] };
      decades.push(newDecade);
    }
  });
  return decades;
};

const addCoverArt = async (albums) => {
  const albumsWithCoverArt = await Promise.all(
    albums.map(async (album) => {
      const coverArt = await getCoverArt(album.name);
      return { ...album, coverArt };
    })
  );
  return albumsWithCoverArt;
};

const getDataForBoard = async () => {
  const albums = await getAlbumsFromFile();
  const albumsWithCoverArt = await addCoverArt(albums);
  const sortedAlbums = sortAlbumsByYear(albumsWithCoverArt);
  const albumsByDecade = groupAlbumsByDecade(sortedAlbums);
  return albumsByDecade;
};

module.exports = {
  getDataForBoard,
};
