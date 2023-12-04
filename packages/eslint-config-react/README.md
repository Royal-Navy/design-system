# ESLint Config React

This package provides the Royal Navy ESLint and Prettier configuration.

## ESLint

[ESLint](https://eslint.org/) statically analyzes your code to quickly find problems. ESLint is built into most text editors and you can run ESLint as part of your continuous integration pipeline.

## Prettier

[Prettier](https://prettier.io/) is an opinionated code formatter. It removes original styling and ensures that all outputted code conforms to a consistent style.

## Installation

The Royal Navy ESLint config is available as an [NPM package](https://www.npmjs.com/package/@royalnavy/eslint-config-react).

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

## Questions

The Design System is maintained by a team at the Royal Navy. If you want to know more about the Royal Navy Design System, please email the [Design System Team](mailto:design-system@digital.mod.uk).

## Documentation

The [documentation website](https://design-system.digital.mod.uk/) contains all the information you need to build your application using the Royal Navy Design System.

## Contributing

The [contributing guide](https://github.com/Royal-Navy/design-system/blob/master/docs/contributing.md) resource presents information about our development process.

## Changelog

If you have recently updated then read the [release notes](https://github.com/Royal-Navy/design-system/releases)

## Roadmap

The [Design System Roadmap Board](https://github.com/Royal-Navy/design-system/projects/7) contains the work that has been prioritised for the next 12 months.

## License

The Royal Navy Design System is licensed under the [Apache License 2.0](https://github.com/Royal-Navy/design-system/blob/master/LICENSE).
