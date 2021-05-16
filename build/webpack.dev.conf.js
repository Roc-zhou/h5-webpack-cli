
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
    host: 'localhost',
    port: 8080,
    overlay: true,
    open: true,
  },
}

module.exports = new Promise((res, rej) => {
  portfinder.basePort = process.env.PORT || webpackDevConfig.devServer.port
  portfinder.getPortPromise().then(port => {
    console.log(port);
    process.env.PORT = port
    webpackDevConfig.devServer.port = port
    res(merge(baseConfig, webpackDevConfig))
  }).catch(err => {
    console.log(err)
    rej(err)
  })
})