const isProd = process.env.NODE_ENV === 'production'
/*
 * Gets the BASE_PATH from the command used to start this app.
 * If BASE_PATH is specified but it does not start with a "/" 
 * then add it. 
 * https://stackoverflow.com/questions/60452054/nextjs-deploy-to-a-specific-url-path
 */
function getBasePath() {
  var basePath = undefined

  if (isProd && process.env.BASE_PATH) {
    if (process.env.BASE_PATH.startsWith("/")) {
      basePath = process.env.BASE_PATH;
    } else {
      basePath = "/" + process.env.BASE_PATH;
    }
  }
  return basePath
}

const basePath = getBasePath()
console.warn(
  // "Are you publishing to <username>.github.io ? then [basePath] should be empty.\n" +
  // "Are you publishing to <username>.github.io/<repository> ? then [basePath] should be /<repository>.\n" +
  `P.S. [basePath] is {${basePath}}`
)

const nextConfig = {
  reactStrictMode: true,
  basePath: basePath,
  assetPrefix: basePath,
  publicRuntimeConfig: {
    basePath: basePath,
  },
}

module.exports = nextConfig
