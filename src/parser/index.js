const fs = require('fs').promises;

const parseAlbumsFromFile = async (path) => {
  const data = (await fs.readFile(path)).toString().split('\n');
  const validData = data.filter((album) => album.trim() !== '');
  const albums = validData.map((item) => {
    const [year, ...rest] = item.split(' ');
    const name = rest.join(' ');

    return { year, name };
  });
  return albums;
};

module.exports = { parseAlbumsFromFile };
