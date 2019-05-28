// development config
const merge = require('webpack-merge')
const { resolve } = require('path')

const commonConfig = require('./common')

module.exports = merge(commonConfig, {
  mode: 'development',
  output: {
    filename: 'index.js',
    path: resolve(__dirname, '../dist'),
    libraryTarget: 'umd',
    library: 'navycomponents',
    umdNamedDefine: true,
  },
  devtool: 'cheap-module-eval-source-map',
})
