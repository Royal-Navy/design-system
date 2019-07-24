# Royal Navy - NELSON [Standards Toolkit](https://docs.royalnavy.io/)

[![CircleCI](https://circleci.com/gh/Royal-Navy/standards-toolkit/tree/develop.svg?style=svg)](https://circleci.com/gh/Royal-Navy/standards-toolkit/tree/develop) [![GitHub release](https://img.shields.io/github/release/royal-navy/standards-toolkit.svg)](https://github.com/Royal-Navy/standards-toolkit/releases) [![GitHub license](https://img.shields.io/badge/license-Apache%202-blue.svg)](https://github.com/standards-toolkit/blob/master/LICENSE)

The Standards Toolkit provides a multi-framework, responsive component library and SASS framework. It's built to help developers build web applications that meet the Royal Navy's service standards.

## Latest release & versioning

We adhere to [semantic versioning](https://semver.org/). Version [1.0.0](https://github.com/Royal-Navy/standards-toolkit/releases/tag/1.0.0) is the current stable release.

## Supported technologies

The following view layer libraries are currently supported:

- React

## Component usage guidelines

Please refer to the [component demo pages](https://docs.royalnavy.io/components) to see live examples, code snippets and details on how to cosume each of the components.

## Installation & quick start

To install and save to your projects package.json dependencies, run:

```
// with npm
npm install @royalnavy/css-framework @royalnavy/react-component-library

// ...or with yarn
yarn add @royalnavy/css-framework @royalnavy/react-component-library
```

### Quick start

Here's a quick example application to get you started:

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import '@royalnavy/css-framework/dist/style.css'
import { Button } from '@royalnavy/react-component-library'

function App() {
  return (
    <Button variant="primary">
      Hello, World!
    </Button>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

## Monorepo & package management

>This repository uses [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) to manage it's dependencies and inter-dependencies between the packages within it.
>
>You must use [Yarn](https://yarnpkg.com) to manage dependencies

This repo is a 'monorepo', a single git repository that contains multiple projects. The top level of the repo has a small number of components for githook integration as well as common lint configuration data and packages. Below that there is a packages folder which in turn holds a sub folder for each npm package to be developed/deployed.

Each package folder has it's own npm package.json and can act like a stand alone project. Yarn workspaces detects dependencies that are held within the monorepo and creates a link between them, so you can work on a react component and it's styles in the css-framework and see instant updates in storybook.

Manage dependencies for packages like normal, but remember to use `yarn add` instead of `npm install`.

## Scripts

The top level project contains scripts that are then executed for all packages.

- `lint`  Checks syntax and simple errors in javascript files.
- `test`  Runs Jest tests in all the packages.
- `build` Runs the build script in all packages

## Git integration

The top level project is configured to use Git commit hooks to lint all files when a change is committed.

## Prettier

The top level package file is configured with a set of Prettier options to insist on consistent code formatting throughout all packages.

## Browser support

The Standards Toolkit currently supports all major evergreen browsers.

## Licensing

The Royal-Navy/standards-toolkit is licensed under the [Apache License 2.0](https://github.com/Royal-Navy/standards-toolkit/blob/develop/LICENSE).
