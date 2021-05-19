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

const htmlPages = (entriesPage => {
  let resultFiles = [];
  entriesPage.forEach((entry, index) => {
    let htmlPlugin = {
      filename: entry.split('/')[1],
      filedir: entry.split('/')[0],
      chunks: [entry, 'manifest', 'vendor']
    };
    resultFiles.push(htmlPlugin);
  });

  return resultFiles;
})(Object.keys(entriesPage));

const htmlPlugConfg = (name, dirname, chunks) => {
  return {
    filename: `${dirname}/${name}.html`,
    template: `src/pages/${dirname}/${name}.html`,
    inject: true,
    hash: false,
    meta: {
      viewport: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1'
    },
    chunks: chunks,
    chunkSortMode: 'dependency',
    minify: process.env.NODE_ENV === 'development' ? false : {
      removeComments: false,
      collapseWhitespace: false
    }
  };
};

module.exports = {
  resolve,
  htmlPages,
  entriesPage,
  htmlPlugConfg
}