const getEnvVariable = (key) => {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Declaration for ${value} is missing in the .env file.`);
  }

  return value;
};

module.exports = { getEnvVariable };
