module.exports = {
  stories: ['../src/**/*.stories.tsx'],
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
  webpackFinal: (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        stream: require.resolve('stream-browserify'),
      },
    }

    return config
  },
}
