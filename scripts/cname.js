const fs = require('fs')

const args = process.argv.slice(2)
const content = args.join('\n')
const filePath = './out/CNAME'

/**
 * Add CNAME to the file
 * All the args are joined by new line in [content]
 * and added to the [filePath]
 * 
 * node script/cname.js domain1 domain2 domain3
 * i.e.
 * node script/cname.js hashirshoaeb.com www.hashirshoaeb.com
 */
console.log("Creating CNAME...")
fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.error(err)
  }
  else {
    console.log(`${filePath} created`)
    console.log(`Domains added:\n${content}`)
  }
})