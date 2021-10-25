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
  previewHead: (head) => `
    ${head}
    ${process.env.NETLIFY ? newRelic.script : ''}
  `,
  stories: ['../src/**/*.stories.tsx'],
}
