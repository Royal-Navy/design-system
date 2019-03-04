# @royalnavy/eslint-config-react

Provides a unified linting and formatting config for all Royal Navy Apps using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/).

## Installation

In your commandline run `npm install @royalnavy/eslint-config-react`

Then, in the root of your project create the following files:

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

## Usage

In your command line run `yarn lint` and if there are errors to fix, they will appear in the output.

### Editor integration

Prettier allows for editor integration and can automatically fix any errors it can when you save the file. To enable this, visit https://prettier.io/docs/en/editors.html and check out the instructions for your specific editor.
