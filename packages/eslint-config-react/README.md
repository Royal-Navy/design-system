# ESLint Config
Provides a unified linting and formatting config for all Royal Navy Apps using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/).

## Installation
The Royal Navy ESLint config is available as a npm package.

```
// npm
npm install @royalnavy/eslint-config-react

// yarn
yarn add @royalnavy/eslint-config-react
```

## Usage
In the root of your project create the following files:

_.eslintrc.js_

```js
module.exports = {
  extends: ['@royalnavy/eslint-config-react'],
}
```

_.pretter.config.js_

```js
module.exports = require('@royalnavy/eslint-config-react/prettier.config')
```

If you want to install the prerelease then use the `@next` distribution tag.

## Usage
In your command line run `yarn lint` and if there are errors to fix, they will appear in the output.

### Editor integration
Prettier allows for editor integration and can automatically fix any errors it can when you save the file. To enable this, visit https://prettier.io/docs/en/editors.html and check out the instructions for your specific editor.

## Questions
Standards Toolkit is maintained by a team at the Royal Navy. If you want to know more about Standards Toolkit, please email the [Design System team](mailto:standards@royalnavy.io).

## Contributing
The [contributing guide](https://github.com/Royal-Navy/standards-toolkit/blob/master/docs/contributing.md) resource presents information about our development process. 

## Changelog
If you have recently updated then read the [release notes](https://github.com/Royal-Navy/standards-toolkit/releases)

## License
The Standards Toolkit is licensed under the [Apache License 2.0](https://github.com/Royal-Navy/standards-toolkit/blob/master/LICENSE)
