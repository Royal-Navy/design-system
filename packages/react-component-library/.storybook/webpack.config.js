const commonConfig = require('../webpack/common')
const merge = require('webpack-merge')

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
})
