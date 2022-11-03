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
    'styled-components': 'styled-components',
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
      // Transpile Downshift for IE11 compatibility
      {
        test: /\.m?js$/,
        include: /node_modules\/downshift\//,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
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
  plugins: [new CleanWebpackPlugin()],
}
