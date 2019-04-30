module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  root: true,
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions': 0,
    'object-shorthand' : 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      },
    },
  },
  overrides: {
    files: [
      '*.stories.js',
      '*.stories.ts',
      '*.spec.js',
      '*.spec.ts',
      '*.test.js',
      '*.test.ts',
    ],
    rules: {
      'import/no-extraneous-dependencies': 0,
      'import/no-unresolved': 0,
    },
  },
}
