const newRelic = require('./newRelic')

module.exports = {
  addons: [
    '@storybook/addon-postcss',
    '@storybook/preset-scss',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
  ],
  core: {
    builder: 'webpack5',
  },
  previewHead: (head) => `
    ${head}
    ${process.env.NETLIFY ? newRelic.script : ''}
  `,
  webpackFinal: (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        fallback: {
          ...config.resolve.fallback,
          stream: require.resolve('stream-browserify'),
        },
      },
    }
  },
  stories: ['../src/**/*.stories.tsx'],
}
