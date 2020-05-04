module.exports = {
  extends: ['@royalnavy/eslint-config-react', 'plugin:jest/recommended'],
  plugins: ['jest'],
  parser: 'babel-eslint',
  rules: {
    'jsx-a11y/label-has-for': 0,
    // https://github.com/benmosher/eslint-plugin-import/issues/1615
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        json: 'never',
        'd.ts': 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.json', '.d.ts'],
      },
    },
  },
}
