const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'navy-html-component-library.js',
    path: path.resolve(__dirname, 'dist'),
  },
}
