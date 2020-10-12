// development config
const { merge } = require('webpack-merge')
const { resolve } = require('path')

const commonConfig = require('./common')

module.exports = merge(commonConfig, {
  mode: 'development',
  output: {
    filename: 'index.js',
    path: resolve(__dirname, '../dist/cjs'),
    libraryTarget: 'commonjs2',
  },
  devtool: 'cheap-module-eval-source-map',
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
