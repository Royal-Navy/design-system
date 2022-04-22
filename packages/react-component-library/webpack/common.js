const { resolve } = require('path')

module.exports = {
  target: 'node',
  entry: ['./index.ts'],
  output: {
    filename: 'index.js',
    path: resolve(__dirname, '../dist/cjs'),
    libraryTarget: 'commonjs2',
  },
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
