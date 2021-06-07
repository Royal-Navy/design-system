const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const { merge } = require('webpack-merge')

const commonConfig = require('./common')

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [new CleanWebpackPlugin(), new BundleAnalyzerPlugin()],
})
