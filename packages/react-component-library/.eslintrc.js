module.exports = {
  extends: ['@defencedigital/eslint-config-react'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.eslint.json',
  },
  overrides: [
    {
      files: ['**/*.stories.tsx'],
      rules: {
        'jsx-a11y/anchor-is-valid': 'off',
      },
    },
    {
      files: ['*.js'],
      parserOptions: {
        project: null,
      },
    },
    {
      files: ['cypress/specs/**/*.ts'],
      rules: {
        'jest/expect-expect': 'off',
        'jest/no-standalone-expect': 'off',
        'jest/valid-expect': 'off',
        'jest/valid-describe': 'off',
        'jest/valid-describe-callback': 'off',
        'jest/valid-title': 'off',
      },
    },
  ],
}
