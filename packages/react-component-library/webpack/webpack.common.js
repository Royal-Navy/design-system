/* eslint global-require: 0 */
const CleanWebpackPlugin = require('clean-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, '..', 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new StyleLintPlugin({
      configFile: '../css-framework/.stylelintrc',
      context: 'src',
      failOnError: false,
      files: ['../../css-framework/src/*.scss', '../../css-framework/src/**/*.scss'],
      quiet: false,
      syntax: 'scss'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
}
