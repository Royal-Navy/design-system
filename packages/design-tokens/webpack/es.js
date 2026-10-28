const { resolve } = require('path')
const { merge } = require('webpack-merge')

const prodConfig = require('./prod')

module.exports = merge(prodConfig, {
  output: {
    path: resolve(__dirname, '../dist/es'),
    chunkFormat: 'module',
    library: {
      type: 'module',
    },
  },
  externalsType: 'module',
  experiments: {
    outputModule: true,
  },
})
