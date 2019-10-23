module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'prefer-destructuring': 0,
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js'],
      },
    ],
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
  },
}
