const ghpages = require("gh-pages");
const build_path = './out';

var args = process.argv.slice(2);
var repoURL = args[0];
var branch = args[1];

console.log(`Deploying to ${repoURL} branch ${branch}`);

/**
 * Deploy the built site to GitHub Pages with custom settings and options
 * [repoURL] - The URL of the GitHub repository to deploy to
 * [branch] - The branch to deploy to
 * [build_path] - The path to the built site
 * 
 * node scripts/pages.js <repoURL> <branch>
 * i.e.
 * node scripts/pages.js https://github.com/hashirshoaeb/hashirshoaeb.github.io.git master
 */
ghpages.publish(
  build_path,
  {
    branch: branch,
    repo: repoURL,
    dotfiles: true,
  },
  (err) => {
    if (err) console.error("ERROR: ", err);
    else console.log("PUBLISHED via gh-pages");
  }
);