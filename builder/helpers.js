const getDecade = (year) => ({
  value: +`${year[0]}${year[1]}${year[2]}0`,
  displayName: `${year[2]}0's`,
});

/**
 * Returns albums sorted by year. In case of same year, it sorts alphabetically
 * @param {Array<object>} albums - Unsorted albums.
 * @returns {Array<object>} - Sorted albums.
 */
const sortAlbumsByYear = (albums) =>
  albums.sort((a, b) => {
    const result = a.year - b.year;
    if (result === 0) {
      return a.name > b.name ? 1 : -1;
    }
    return result;
  });

/**
 * Returns albums grouped by decade.
 * @param {Array<object>} albums - Albums.
 * @returns {Array<object>} - Albums grouped by decade.
 */
const groupAlbumsByDecade = (albums) => {
  const decades = [];
  albums.forEach((album) => {
    const { value, displayName } = getDecade(album.year);
    const foundDecade = decades.find((d) => d.value === value);
    if (foundDecade) {
      foundDecade.albums.push(album);
    } else {
      const newDecade = { value, displayName, albums: [album] };
      decades.push(newDecade);
    }
  });
  return decades;
};

module.exports = { sortAlbumsByYear, groupAlbumsByDecade };
