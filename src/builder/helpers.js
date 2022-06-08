const sortAlbumsByYear = (albums) =>
  albums.sort((a, b) => {
    const result = a.year - b.year;
    if (result === 0) {
      return a.name > b.name ? 1 : -1;
    }
    return result;
  });

const getDecade = (year) => +`${year[0]}${year[1]}${year[2]}0`;

const groupAlbumsByDecade = (albums) => {
  const decades = [];
  albums.forEach(({ name, year, coverArt }) => {
    const decadeValue = getDecade(year);
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

module.exports = { sortAlbumsByYear, groupAlbumsByDecade };
