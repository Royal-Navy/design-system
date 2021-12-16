# MOD.UK [Design System](https://design-system.digital.mod.uk/)

 ![Build & Test Master](https://github.com/defencedigital/mod-uk-design-system/workflows/Build%20&%20Test%20Master/badge.svg)
 [![GitHub release](https://img.shields.io/github/release/royal-navy/design-system.svg)](https://github.com/defencedigital/mod-uk-design-system/releases) [![GitHub license](https://img.shields.io/badge/license-Apache%202-blue.svg)](https://github.com/design-system/blob/master/LICENSE) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=defencedigital_mod-uk-design-system&metric=coverage)](https://sonarcloud.io/dashboard?id=defencedigital_mod-uk-design-system) [![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](http://storybook.design-system.digital.mod.uk)

Build web applications that meet the Defence Digital service standards.

Visit the [Roadmap board](https://github.com/defencedigital/mod-uk-design-system/projects/7) to view the high-level objectives for the MOD.UK Design System. To check on issues currently being completed, view our [Tactical board](https://github.com/defencedigital/mod-uk-design-system/projects/6) instead.

## Releases & versioning

All packages are published to the [NPM registry](https://www.npmjs.com/search?q=%40defencedigital) and we adhere to [semantic versioning](https://semver.org/).

## Supported technologies

The following view layer libraries are currently supported:

- React

## Component usage guidelines

Please refer to the [component demo pages](https://design-system.digital.mod.uk/components) and [Storybook](http://storybook.design-system.digital.mod.uk/) to see interactive examples, code snippets and details on how best to consume each of the components.

## Installation & quick start

### Installation

To install and save to your project's package.json dependencies, run:

```
# with npm
npm install @defencedigital/fonts @defencedigital/react-component-library styled-components formik

# ...or with yarn
yarn add @defencedigital/fonts @defencedigital/react-component-library styled-components formik
```

Note: [`styled-components`](https://styled-components.com/) and [`formik`](https://formik.org/) are required [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) and are installed with the above commands.

### Quick start

Here's a quick example application to get you started:

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import '@defencedigital/fonts'
import { GlobalStyleProvider, Button } from '@defencedigital/react-component-library'

function App() {
  return (
    <GlobalStyleProvider>
      <Button variant="primary">
        Hello, World!
      </Button>
     </GlobalStyleProvider>
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
git clone git@github.com:Royal-Navy/design-system.git # or clone your own fork

cd design-system
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
- `build` Runs the build script in all packages.

## Git hooks

Git commit hooks trigger linting of all staged files when a change is committed.

## Prettier

We have configured a set of Prettier options to enforce consistent code formatting.

## Browser support

The MOD.UK Design System currently supports all major evergreen browsers.

## Licensing

The defencedigital/mod-uk-design-system is licensed under the [Apache License 2.0](https://github.com/defencedigital/mod-uk-design-system/blob/master/LICENSE).

## Contributing
Read the [contributing guidelines](docs/contributing.md).

## Thanks

<a href="https://www.chromaticqa.com/"><img src="https://cdn-images-1.medium.com/letterbox/147/36/50/50/1*oHHjTjInDOBxIuYHDY2gFA.png?source=logoAvatar-d7276495b101---37816ec27d7a" width="120"/></a>

We use [Chromatic](https://www.chromaticqa.com/) for visual regression testing.
