// production config
const CleanWebpackPlugin = require('clean-webpack-plugin')
const { resolve } = require('path')
const merge = require('webpack-merge')

const commonConfig = require('./common')

module.exports = merge(commonConfig, {
  mode: 'production',
  output: {
    filename: 'index.js',
    path: resolve(__dirname, '../dist'),
    libraryTarget: 'umd',
    library: 'navycomponents',
    umdNamedDefine: true,
  },
  devtool: 'source-map',
  plugins: [new CleanWebpackPlugin()],
})
