// production config
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { resolve } = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const merge = require('webpack-merge')

const commonConfig = require('./common')

module.exports = merge(commonConfig, {
  mode: 'production',
  output: {
    filename: 'index.js',
    path: resolve(__dirname, '../dist'),
    libraryTarget: 'commonjs2',
  },
  devtool: 'source-map',
  plugins: [new CleanWebpackPlugin(), new BundleAnalyzerPlugin()],
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    },
  },
})
