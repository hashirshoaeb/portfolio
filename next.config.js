const baseURL = "/portfolio";

module.exports = {
  reactStrictMode: true,
  basePath: process.env.BASE_PATH ?? baseURL,
  assetPrefix: process.env.BASE_PATH ?? baseURL,
}
