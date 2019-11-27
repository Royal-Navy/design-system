module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:jest/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'prettier', 'jest'],
  rules: {
    camelCase: 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/label-has-for': 0,
    'prefer-destructuring': 0,
    'prettier/prettier': 0,
    'react/button-has-type': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'no-else-return': ['error', { allowElseIf: true }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
