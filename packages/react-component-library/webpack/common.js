// shared config (dev and prod)
const { resolve } = require('path')

module.exports = {
  target: 'node',
  entry: ['./index.ts'],
  externals: {
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
      amd: 'styled-components',
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  context: resolve(__dirname, '../src'),
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: ['babel-loader', 'source-map-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|woff|woff2|eot|ttf)$/,
        use: ['url-loader?limit=100000'],
      },
    ],
  },

  performance: {
    hints: false,
  },
}
