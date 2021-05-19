const path = require('path')

module.exports.rules = [
  {
    test: /\.vue$/,
    use: 'vue-loader'
  },
  {
    test: /\.s?css$/,
    use: [
      'vue-style-loader',
      'css-loader',
    ]
  },
  {
    test: /\.(htm|html|ejs)$/i,
    loader: 'html-withimg-loader'
  }
]