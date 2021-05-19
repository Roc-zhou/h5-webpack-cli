
const path = require('path')
const portfinder = require('portfinder')
const baseConfig = require('./webpack.base.conf')
const { merge } = require('webpack-merge')

const webpackDevConfig = {
  mode: process.env.NODE_ENV,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    overlay: true,
    hot: true,
    // open: true,
    before: (app, server, compiler) => {
      let chunks = Object.keys(baseConfig.entry);
      app.get('/', (req, res) => {
        let resHtml = `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
                    <title>index</title>
                </head>
                <body>
                <ul>`;

        chunks.forEach((chunk, index) => {
          resHtml += `<li><a href="${chunk}.html">${chunk}.html</a></li>`;
        });

        resHtml += `</ul>
                </body>
                </html>`;

        res.send(resHtml);
      })
    }
  }
}

module.exports = new Promise((res, rej) => {
  portfinder.basePort = process.env.PORT || webpackDevConfig.devServer.port
  portfinder.getPortPromise().then(port => {
    process.env.PORT = port
    webpackDevConfig.devServer.port = port
    res(merge(baseConfig, webpackDevConfig))
  }).catch(err => {
    console.log(err)
    rej(err)
  })
})