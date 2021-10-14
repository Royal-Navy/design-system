module.exports = {
  extends: ['@defencedigital/eslint-config-react'],
  rules: {
    'import/extensions': [
      'error',
      {
        json: 'always',
      },
    ],
  },
}
