module.exports = {
  presets: [['@babel/preset-env'], '@babel/preset-react', '@babel/typescript'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
    'babel-plugin-styled-components',
  ],
}
