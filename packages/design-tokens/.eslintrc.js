module.exports = {
  extends: ['@royalnavy/eslint-config-react'],
  rules: {
    'import/extensions': [
      'error',
      {
        json: 'always',
      },
    ],
  },
}
