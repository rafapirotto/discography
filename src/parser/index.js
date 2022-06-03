const fs = require('fs').promises;

const getAlbumsFromFile = async () => {
  try {
    const data = (await fs.readFile('../assets/discography.txt')).toString().split('\n');
    return data.filter((album) => album.trim() !== '');
  } catch (error) {
    console.log(error);
  }
};

const sortAlbumsByDate = (albums) =>
  albums.sort((a, b) => {
    const result = a.year - b.year;
    if (result === 0) {
      return a.name > b.name ? 1 : -1;
    }
    return result;
  });

const groupAlbumsByDecade = (albums) => {
  try {
    const decades = [];
    albums.forEach((item) => {
      const [date, ...rest] = item.split(' ');
      const albumName = rest.join(' ');
      if (date.length > 0) {
        const decadeValue = +`${date[0]}${date[1]}${date[2]}0`;
        const decadeDisplayName = `${date[2]}0s`;
        const newAlbum = { name: albumName, year: +date };
        const decade = decades.find(({ value }) => value === decadeValue);

        if (decade) {
          decade.albums.push(newAlbum);
        } else {
          const newDecade = {
            value: decadeValue,
            displayName: decadeDisplayName,
            albums: [newAlbum],
          };
          decades.push(newDecade);
        }
      }
    });
    return decades;
  } catch (error) {
    console.log(error);
  }
};

const sortAlbums = (decades) => {
  const sortedDecades = [];
  decades.forEach((decade) => {
    const sortedAlbums = sortAlbumsByDate(decade.albums);
    sortedDecades.push({ ...decade, albums: sortedAlbums });
  });
  return sortedDecades;
};

const sortDecades = (decades) => decades.sort((a, b) => a.value - b.value);

module.exports = {
  getAlbumsFromFile,
  groupAlbumsByDecade,
  sortDecades,
  sortAlbums,
};
