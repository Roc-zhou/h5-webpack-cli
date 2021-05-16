const webpack = require('webpack')
const path = require('path')
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin');
const config = require('../config')
const { rules } = require('./webpack.rules.conf')

const configWebpackDev = {
  entry: config.entriesPage,
  module: {
    noParse: /jquery|lodash/,
    rules: [...rules]
  },
  plugins:[]
}

console.log(configWebpackDev);

module.exports = configWebpackDev