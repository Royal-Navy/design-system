const airbnbRestrictedSyntax = require('eslint-config-airbnb-base/rules/style')
  .rules['no-restricted-syntax']

module.exports = {
  extends: ['@royalnavy/eslint-config-react', 'plugin:storybook/recommended'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.eslint.json',
  },
  overrides: [
    {
      files: ['src/**/*.ts', 'src/**/*.tsx'],
      excludedFiles: [
        'src/styled-components/GlobalStyle.tsx',
        '**/*.stories.tsx',
      ],
      rules: {
        'no-restricted-syntax': [
          ...airbnbRestrictedSyntax,
          {
            selector:
              "BinaryExpression > MemberExpression[property.name='mode']",
            message:
              'Use isDarkColorMode(theme) so dark styles stay behind unstable_colorModes.',
          },
        ],
      },
    },
    {
      files: ['**/*.stories.tsx'],
      rules: {
        'jsx-a11y/anchor-is-valid': 'off',
        'react/no-unknown-property': ['error', { ignore: ['css'] }],
      },
    },
    {
      files: ['**/*.test.tsx'],
      rules: {
        'no-promise-executor-return': 'off',
      },
    },
    {
      files: ['*.js'],
      parserOptions: {
        project: null,
      },
    },
    {
      files: ['e2e/**/*.ts'],
      extends: ['plugin:playwright/playwright-test'],
    },
  ],
}
