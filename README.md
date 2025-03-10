# Royal Navy Design System

![Build & Test Master](https://github.com/Royal-Navy/design-system/actions/workflows/build_and_test.yml/badge.svg)
[![GitHub release](https://img.shields.io/github/release/royal-navy/design-system.svg)](https://github.com/Royal-Navy/design-system/releases) [![GitHub license](https://img.shields.io/badge/license-Apache%202-blue.svg)](https://github.com/design-system/blob/master/LICENSE) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/) 
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=royal-navy_design-system&metric=coverage)](https://sonarcloud.io/summary/new_code?id=royal-navy_design-system)
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](http://storybook.design-system.navy.digital.mod.uk)

Build web applications that meet the Royal Navy service standards.

Visit the [Roadmap board](https://github.com/Royal-Navy/design-system/projects/7) to view the high-level objectives for the Royal Navy Design System. To check on issues currently being completed, view our [Tactical board](https://github.com/Royal-Navy/design-system/projects/6) instead.

## Releases & versioning

All packages are published to the [NPM registry](https://www.npmjs.com/search?q=%40royalnavy) and we adhere to [semantic versioning](https://semver.org/).

## Supported technologies

The following view layer libraries are currently supported:

- React

## Component usage guidelines

Please refer to [Storybook](http://storybook.design-system.navy.digital.mod.uk/) to see interactive examples, code snippets and details on how best to consume each of the components.

## Installation & quick start

### Installation

To install and save to your project's package.json dependencies, run:

```
# with npm
npm install @royalnavy/fonts @royalnavy/react-component-library styled-components

# ...or with pnpm
pnpm add @royalnavy/fonts @royalnavy/react-component-library styled-components
```

>[!NOTE]
>[`styled-components`](https://styled-components.com/) is a required [peer dependency](https://nodejs.org/en/blog/npm/peer-dependencies/) and is installed with the above command.

### Quick start

Here's a quick example application to get you started:

```javascript
import React from 'react'
import { createRoot } from 'react-dom/client';
import '@royalnavy/fonts'
import { GlobalStyleProvider, Button } from '@royalnavy/react-component-library'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

function App() {
  return (
    <GlobalStyleProvider>
      <Button variant="primary">
        Hello, World!
      </Button>
    </GlobalStyleProvider>
  )
}

root.render(<App />)
```

## Monorepo & package management

> Splitting up large codebases into separate independently versioned packages is extremely useful for code sharing. However, making changes across many repositories is messy and difficult to track, and testing across repositories gets complicated really fast.
>
> To solve these (and many other) problems, some projects will organize their codebases into multi-package repositories (sometimes called monorepos).

Each package folder has it's own npm package.json and can act like a stand alone project. Pnpm workspaces detects dependencies that are held within the monorepo and creates a link between them, so you can work on a react component and see instant updates in Storybook.

Manage dependencies for packages like normal, but remember to use `pnpm add` instead of `npm install`.

## Run locally

You'll need [Git](https://help.github.com/articles/set-up-git/) and [Node.js](https://nodejs.org/en/) installed to get this project running.

>[!NOTE]
>You will need the [active LTS (Long-term support)](https://github.com/nodejs/Release#release-schedule) Node.js version for this project (as specified in [.nvmrc](./.nvmrc)).

### Fork repository (optional)

If you're an external contributor make sure to [fork this project first](https://help.github.com/articles/fork-a-repo/).

### Clone repository

```
git clone git@github.com:Royal-Navy/design-system.git # or clone your own fork

cd design-system
```

### Using nvm (optional)

If you work across multiple Node.js projects there's a good chance they require different Node.js and npm versions.

To enable this we use [nvm (Node Version Manager)](https://github.com/creationix/nvm) to switch between versions easily.

1. [Install nvm](https://github.com/creationix/nvm#installation)
2. Run `nvm install` in the project directory (this will use [.nvmrc](./.nvmrc))

## Scripts

The top level project contains scripts that are then executed for all packages:

- `lint` checks syntax and simple errors in javascript files
- `test` runs Jest tests in all the packages
- `build` runs the build script in all packages

## Git hooks

Git commit hooks trigger linting of all staged files when a change is committed.

## Prettier

We have configured a set of Prettier options to enforce consistent code formatting.

## Browser support

The Royal Navy Design System currently supports all major evergreen browsers.

## Licensing

The Royal-Navy/design-system is licensed under the [Apache License 2.0](https://github.com/Royal-Navy/design-system/blob/master/LICENSE).

## Contributing

Read the [Contributing Guidelines](docs/CONTRIBUTING.md).

## Thanks

<a href="https://www.chromaticqa.com/"><img src="https://cdn-images-1.medium.com/v2/size:147:36:false:true/extend:true:nowe:74:18/bg:ffffff/1*oHHjTjInDOBxIuYHDY2gFA.png" width="120"/></a>

We use [Chromatic](https://www.chromaticqa.com/) for visual regression testing.
