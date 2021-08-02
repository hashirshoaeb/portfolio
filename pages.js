const ghpages = require("gh-pages");
const build_path = `${__dirname}/build`;

var args = process.argv.slice(2);
var repoURL = args[0];
var branch = args[1];

console.log(`Deploying to ${repoURL} branch ${branch}`);

ghpages.publish(
  build_path,
  {
    branch: "master",
    repo: repoURL,
  },
  (err) => {
    if (err) console.error("ERROR: ", err);
    else console.log("PUBLISHED");
  }
);