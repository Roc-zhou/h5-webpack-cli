const path = require('path')

module.exports.rules = [
  {
    test: /\.vue$/,
    use: 'vue-loader'
  },
  {
    test: /\.s?css$/,
    use: [
      
    ]
  },
  {
    test: /\.(htm|html|ejs)$/i,
    loader: 'html-withimg-loader'
  }
]