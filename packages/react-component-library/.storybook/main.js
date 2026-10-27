const { dirname, join } = require('path')
const newRelic = require('./newRelic')

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')))
}

function isBabelRule(rule) {
  return rule.use?.some?.(({ loader }) => loader?.includes('babel-loader'))
}

// Workspace packages resolve outside node_modules, and their prebuilt
// bundles break babel-plugin-styled-components
function excludeWorkspaceBuilds(rule) {
  if (!isBabelRule(rule) || !Array.isArray(rule.exclude)) {
    return rule
  }

  return {
    ...rule,
    exclude: [...rule.exclude, /[\\/]packages[\\/][^\\/]+[\\/]dist[\\/]/],
  }
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
          ...config.module.rules.map(excludeWorkspaceBuilds),
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

  staticDirs: [
    '../src/forms/images',
    '../src/tokens/images',
    '../src/intro/static',
  ],

  framework: {
    name: getAbsolutePath('@storybook/react-webpack5'),

    options: {
      strictMode: false,
    },
  },

  typescript: {
    reactDocgen: 'react-docgen',
  },
}
