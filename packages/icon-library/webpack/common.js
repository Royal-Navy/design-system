const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { resolve } = require('path')

module.exports = {
  target: 'node',
  entry: ['./index.ts'],
  output: {
    filename: 'index.js',
    path: resolve(__dirname, '../dist/cjs'),
    library: {
      type: 'commonjs2',
    },
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
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
    ],
  },
  performance: {
    hints: false,
  },
  plugins: [new CleanWebpackPlugin()],
}
