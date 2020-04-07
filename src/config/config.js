const envVar =
  // eslint-disable-next-line no-underscore-dangle
  process.env.NODE_ENV === "production" ? window._env_ : process.env;
const { NODE_ENV } = envVar;

const config = {
  NODE_ENV,
  PUBLIC_URL: process.env.PUBLIC_URL
};

module.exports = config;
