module.exports = {
  extends: ['@defencedigital/eslint-config-react'],
  overrides: [
    {
      files: ['**/*.stories.tsx'],
      rules: {
        'jsx-a11y/anchor-is-valid': 'off',
      },
    },
  ],
}
