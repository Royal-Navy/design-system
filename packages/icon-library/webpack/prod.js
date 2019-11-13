// production config
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { resolve } = require('path')
const merge = require('webpack-merge')

const commonConfig = require('./common')

module.exports = merge(commonConfig, {
  mode: 'production',
  output: {
    filename: 'index.js',
    path: resolve(__dirname, '../dist/cjs'),
    libraryTarget: 'commonjs2',
  },
  devtool: 'source-map',
  plugins: [new CleanWebpackPlugin()],
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
