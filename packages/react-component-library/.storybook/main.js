const newRelic = require('./newRelic')

module.exports = {
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    '@storybook/addon-a11y',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    'storybook-addon-performance/dist/cjs/register',
  ],
  core: {
    builder: 'webpack5',
  },
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
  stories: ['../src/**/*.stories.tsx'],
  reactOptions: {
    strictMode: process.env.REACT_STRICT_MODE === '1',
  },
}
