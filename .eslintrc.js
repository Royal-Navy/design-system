module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'prefer-destructuring': 0,
    'prettier/prettier': ['error'],
  },
}
