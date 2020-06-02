# ESLint Config
This package provides the Royal Navy [ESLint](https://eslint.org/) configuration.

## Installation
The Royal Navy ESLint config is available as an NPM package.

```
// npm
npm install @royalnavy/eslint-config-react

// yarn
yarn add @royalnavy/eslint-config-react
```

In the root of your project create the following files:

_.eslintrc.js_

```js
module.exports = {
  extends: ['@royalnavy/eslint-config-react'],
}
```

_.prettier.config.js_	

```js	
module.exports = require('@royalnavy/eslint-config-react/prettier.config.js')
```

If you want to install the prerelease then use the `@next` distribution tag.

## Questions
The ESLint config package is maintained by a team at the Royal Navy. If you want to know more about the Royal Navy Design System, please email the [Design System Team](mailto:design-system@royalnavy.io).

## Contributing
The [contributing guide](https://github.com/Royal-Navy/design-system/blob/master/docs/contributing.md) resource presents information about our development process. 

## Changelog
If you have recently updated then read the [release notes](https://github.com/Royal-Navy/design-system/releases)

## Roadmap
The [Design System Roadmap Board](https://github.com/orgs/Royal-Navy/projects/5) contains the work that has been prioritised for the next 12 months.

## License
The Royal Navy Design System is licensed under the [Apache License 2.0](https://github.com/Royal-Navy/design-system/blob/master/LICENSE)
