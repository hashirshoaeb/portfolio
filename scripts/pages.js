const ghpages = require("gh-pages");
const build_path = './out';

const args = process.argv.slice(2);
const username = args[0];
const repoURL = `https://github.com/${username}/${username}.github.io.git`;
const branch = args[1];

console.log(`Deploying to ${repoURL} branch ${branch}`);

/**
 * Deploy the built site to GitHub Pages with custom settings and options
 * [username] is the GitHub username of the user who owns the repo
 * [repoURL] - The URL of the GitHub repository to deploy to
 * [branch] - The branch to deploy to
 * [build_path] - The path to the built site
 * 
 * node scripts/pages.js <username> <branch>
 * i.e.
 * node scripts/pages.js hashirshoaeb master
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