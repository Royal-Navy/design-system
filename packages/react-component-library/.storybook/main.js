const { resolve } = require('path')

module.exports = {
  stories: ['../**/*.stories.tsx'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/preset-scss',
    'storybook-addon-performance',
  ],
  webpackFinal: async (config, { configType }) => {

    config.module.rules[0].test = /\.(js|mjs|tsx?|jsx?)$/
    config.module.rules[0].include = [
      ...config.module.rules[0].include,
      resolve('../../node_modules/storybook-addon-performance'),
    ]

    console.log(config.module.rules[0])

    return config
  },
}
