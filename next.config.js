const { baseURL } = require("./config/config");

module.exports = {
  reactStrictMode: true,
  basePath: process.env.BASE_PATH ?? baseURL,
  // assetPrefix: process.env.BASE_PATH ?? baseURL,
}
