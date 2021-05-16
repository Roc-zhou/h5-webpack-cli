const path = require('path')
const glob = require('glob')

const resolve = dir => {
  return path.join(__dirname, '..', dir)
}


const entriesPage = (entryPath => {
  let filesPath,
      basename,
      pathName,
      exclude = [],
      entryList = {}

  filesPath = glob.sync(`${entryPath}/*/*.js`, { ignore: exclude })
  filesPath.forEach((item, index) => {
    basename = path.basename(item, path.extname(item));
    pathName = item.split('src/pages/')[1].split('/')[0];
    entryList[`${pathName}/${basename}`] = item
  })
  return entryList

})(resolve('src/pages'))

module.exports = {
  resolve,
  entriesPage
}