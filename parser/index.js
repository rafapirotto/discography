const fs = require('fs').promises;

const InvalidPath = require('../exceptions/InvalidPathError');
const logger = require('../logger');

const getParsedData = async (path) => {
  const parsedData = (await fs.readFile(path)).toString().split('\n');
  const validData = parsedData.filter((album) => album.trim() !== '');
  return validData;
};

const buildAlbums = (parsedData) =>
  parsedData.map((item) => {
    const [year, ...rest] = item.split(' ');
    const name = rest.join(' ');
    return { year, name };
  });

/**
 * Parses a text file to an array of objects containing the year and name of each album.
 * @param {string} path - Path to the text file we want to parse.
 * @returns {Array<Object>} - Array of objects containing the albums with their corresponding year and name.
 */
const parseAlbumsFromFile = async (path) => {
  try {
    logger.info('Parsing albums...');
    const parsedData = await getParsedData(path);
    const albums = buildAlbums(parsedData);
    return albums;
  } catch (error) {
    throw new InvalidPath();
  }
};

module.exports = { parseAlbumsFromFile };
