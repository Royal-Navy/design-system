const { dirname, join } = require('path')
const newRelic = require('./newRelic')

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')))
}

module.exports = {
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-a11y'),
    '@storybook/addon-webpack5-compiler-babel',
  ],

  previewHead: (head) => `
    ${head}
    ${process.env.NETLIFY ? newRelic.script : ''}
  `,

  webpackFinal: (config) => {
    // Transpile Downshift for IE11 compatibility
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
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
        ],
      },
    }
  },

  stories: ['../src/**/*.stories.tsx', '../src/**/*.mdx'],

  framework: {
    name: getAbsolutePath('@storybook/react-webpack5'),

    options: {
      strictMode: false,
    },
  },

  docs: {
    autodocs: true,
  },

  typescript: {
    reactDocgen: 'react-docgen',
  },
}
