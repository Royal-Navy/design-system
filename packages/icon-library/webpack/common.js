// shared config (dev and prod)
const { resolve } = require('path')

module.exports = {
  target: 'node',
  entry: ['./index.ts'],
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
    ],
  },

  performance: {
    hints: false,
  },
}
