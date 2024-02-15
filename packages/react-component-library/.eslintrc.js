module.exports = {
  extends: ['@royalnavy/eslint-config-react', 'plugin:storybook/recommended'],
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
      files: ['e2e/**/*.ts'],
      extends: ['plugin:playwright/playwright-test'],
    },
  ],
}
