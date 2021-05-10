---
title: ESLint Config React
description: 'This package provides the Royal Navy ESLint and Prettier configuration.'
header: true
---

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
