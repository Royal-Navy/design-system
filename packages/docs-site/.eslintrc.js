module.exports = {
  extends: ['@royalnavy/eslint-config-react', 'plugin:jest/recommended'],
  rules: {
    'jsx-a11y/label-has-for': 0,
  },
  plugins: ['jest'],
  parser: 'babel-eslint',
}
