const fs = require('fs').promises;

const getAlbumsFromFile = async () => {
  try {
    const data = await fs.readFile('../assets/discography.txt');
    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAlbumsFromFile,
};
