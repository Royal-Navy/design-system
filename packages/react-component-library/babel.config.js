module.exports = (api) => {
  // Storybook also uses the `es` env, but resolves source files through webpack
  const isCliBuild = api.caller((caller) => caller?.name === '@babel/cli')

  return {
    presets: ['@babel/preset-react', '@babel/typescript'],
    plugins: [
      '@babel/proposal-class-properties',
      '@babel/proposal-object-rest-spread',
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@babel/plugin-proposal-optional-chaining',
      [
        'search-and-replace',
        {
          rules: [
            {
              search: 'searchedString',
              searchTemplateStrings: true,
              replace: 'replacement',
            },
            {
              search: /__RNDS_LOG_LEVEL/,
              replace: process.env.RNDS_LOG_LEVEL || 'warn',
            },
          ],
        },
      ],
    ],
    env: {
      es: {
        presets: [
          [
            '@babel/preset-env',
            {
              modules: false,
            },
          ],
        ],
        plugins: [
          'babel-plugin-styled-components',
          'babel-plugin-jsx-remove-data-test-id',
          '../../scripts/babel/directIconImports',
          ...(isCliBuild ? ['../../scripts/babel/fullySpecifiedImports'] : []),
        ],
      },
      cjs: {
        presets: [['@babel/preset-env']],
        plugins: [
          'babel-plugin-styled-components',
          'babel-plugin-jsx-remove-data-test-id',
        ],
      },
      test: {
        plugins: [
          'babel-plugin-styled-components',
          '@babel/plugin-transform-modules-commonjs',
        ],
      },
      'storybook-test': {
        plugins: ['babel-plugin-styled-components'],
      },
    },
  }
}
