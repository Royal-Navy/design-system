# Royal Navy - NELSON [Standards Toolkit](https://docs.royalnavy.io/)

[![CircleCI](https://circleci.com/gh/Royal-Navy/standards-toolkit/tree/develop.svg?style=svg)](https://circleci.com/gh/Royal-Navy/standards-toolkit/tree/develop) [![Netlify Status](https://api.netlify.com/api/v1/badges/54568c8f-b862-47f9-9a97-99448020057d/deploy-status)](https://app.netlify.com/sites/gracious-keller-4b81ed/deploys) [![GitHub release](https://img.shields.io/github/release/royal-navy/standards-toolkit.svg)](https://github.com/Royal-Navy/standards-toolkit/releases) [![GitHub license](https://img.shields.io/badge/license-Apache%202-blue.svg)](https://github.com/standards-toolkit/blob/master/LICENSE) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

The Standards Toolkit is made up of a responsive component library, icon library and SASS framework. It's here to help developers build web applications that meet the Royal Navy's service standards.

## Releases & versioning

All packages are published to the [NPM registry](https://www.npmjs.com/search?q=%40royalnavy) and we adhere to [semantic versioning](https://semver.org/).

## Supported technologies

The following view layer libraries are currently supported:

- React

## Component usage guidelines

Please refer to the [component demo pages](https://docs.royalnavy.io/components) to see live examples, code snippets and details on how best to consume each of the components.

## Installation & quick start

### Installation

To install and save to your projects package.json dependencies, run:

```
# with npm
npm install @royalnavy/css-framework @royalnavy/react-component-library

# ...or with yarn
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

>Splitting up large codebases into separate independently versioned packages is extremely useful for code sharing. However, making changes across many repositories is messy and difficult to track, and testing across repositories gets complicated really fast.
>
>To solve these (and many other) problems, some projects will organize their codebases into multi-package repositories (sometimes called monorepos).

Each package folder has it's own npm package.json and can act like a stand alone project. Yarn workspaces detects dependencies that are held within the monorepo and creates a link between them, so you can work on a react component and it's styles in the css-framework and see instant updates in storybook.

Manage dependencies for packages like normal, but remember to use `yarn add` instead of `npm install`.

## Run locally

You'll need [Git](https://help.github.com/articles/set-up-git/) and [Node.js](https://nodejs.org/en/) installed to get this project running.

Note: You will need the [active LTS (Long-term support)](https://github.com/nodejs/Release#release-schedule) Node.js version for this project (as specified in [.nvmrc](./.nvmrc))

### Fork repository (optional)
If you're an external contributor make sure to [fork this project first](https://help.github.com/articles/fork-a-repo/)

### Clone repository
```
git clone git@github.com:Royal-Navy/standards-toolkit.git # or clone your own fork

cd standards-toolkit
```

### Using nvm (optional)
If you work across multiple Node.js projects there's a good chance they require different Node.js and npm versions.

To enable this we use [nvm (Node Version Manager)](https://github.com/creationix/nvm) to switch between versions easily.

1. [Install nvm](https://github.com/creationix/nvm#installation)
2. Run `nvm install` in the project directory (this will use [.nvmrc](./.nvmrc))

## Scripts

The top level project contains scripts that are then executed for all packages.

- `lint`  Checks syntax and simple errors in javascript files.
- `test`  Runs Jest tests in all the packages.
- `build` Runs the build script in all packages

## Git hooks

Git commit hooks trigger linting of all staged files when a change is committed.

## Prettier

We have configured a set of Prettier options to enforce consistent code formatting.

## Browser support

The Standards Toolkit currently supports all major evergreen browsers.

## Licensing

The Royal-Navy/standards-toolkit is licensed under the [Apache License 2.0](https://github.com/Royal-Navy/standards-toolkit/blob/develop/LICENSE).
