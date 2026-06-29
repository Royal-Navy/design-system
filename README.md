# Royal Navy Design System

![Build & Test Master](https://github.com/Royal-Navy/design-system/actions/workflows/build_and_test.yml/badge.svg)
[![GitHub release](https://img.shields.io/github/release/royal-navy/design-system.svg)](https://github.com/Royal-Navy/design-system/releases)
[![GitHub license](https://img.shields.io/badge/license-Apache%202-blue.svg)](https://github.com/Royal-Navy/design-system/blob/master/LICENSE)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=royal-navy_design-system&metric=coverage)](https://sonarcloud.io/summary/new_code?id=royal-navy_design-system)
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://storybook.design-system.navy.digital.mod.uk)

Build web applications that meet the Royal Navy service standards.

Browse the components, usage guidelines and code snippets in [Storybook](https://storybook.design-system.navy.digital.mod.uk/).

## Packages

This is a [pnpm](https://pnpm.io/) + [Lerna](https://lerna.js.org/) monorepo. All packages are published to the [npm registry](https://www.npmjs.com/search?q=%40royalnavy) under the `@royalnavy` scope and follow [semantic versioning](https://semver.org/).

| Package                                                                  | Description                                                                                                        |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| [`@royalnavy/react-component-library`](packages/react-component-library) | React component library — the primary consumable package.                                                          |
| [`@royalnavy/design-tokens`](packages/design-tokens)                     | Design tokens (colour, spacing, typography, breakpoints) consumed by the components and available to applications. |
| [`@royalnavy/icon-library`](packages/icon-library)                       | SVG icon set as React components.                                                                                  |
| [`@royalnavy/fonts`](packages/fonts)                                     | Web fonts and the CSS to load them.                                                                                |
| [`@royalnavy/eslint-config-react`](packages/eslint-config-react)         | Shared ESLint configuration used across the repo (not published for app use).                                      |

## Installation

Install the component library alongside its peer dependencies:

```sh
# with pnpm
pnpm add @royalnavy/react-component-library @royalnavy/fonts styled-components

# ...or with npm
npm install @royalnavy/react-component-library @royalnavy/fonts styled-components
```

**Note:** [`styled-components`](https://styled-components.com/) (v6+) is a required [peer dependency](https://nodejs.org/en/blog/npm/peer-dependencies/). The components are built for React 18.

## Quick start

Wrap your application in `GlobalStyleProvider` and import the fonts once at the root:

```jsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import '@royalnavy/fonts'
import { GlobalStyleProvider, Button } from '@royalnavy/react-component-library'

function App() {
  return (
    <GlobalStyleProvider>
      <Button variant="primary">Hello, World!</Button>
    </GlobalStyleProvider>
  )
}

createRoot(document.getElementById('root')).render(<App />)
```

See [Storybook](https://storybook.design-system.navy.digital.mod.uk/) for the full component catalogue and props documentation.

## Developing locally

You'll need [Git](https://help.github.com/articles/set-up-git/) and [Node.js](https://nodejs.org/) installed. This repo uses [pnpm](https://pnpm.io/) as its package manager (see the `packageManager` field in `package.json`) and pins a Node.js version in [`.nvmrc`](./.nvmrc).

External contributors should [fork the repository](https://help.github.com/articles/fork-a-repo/) first.

```sh
# 1. Clone (or clone your fork)
git clone git@github.com:Royal-Navy/design-system.git
cd design-system

# 2. Use the pinned Node.js version (optional, requires nvm)
nvm install

# 3. Enable pnpm via Corepack (ships with Node.js)
corepack enable

# 4. Install dependencies for every package
pnpm install

# 5. Run Storybook for the component library on http://localhost:6006
pnpm --filter @royalnavy/react-component-library storybook
```

pnpm workspaces link the packages together, so a change to `@royalnavy/design-tokens` (for example) is reflected live in Storybook. Add dependencies to a package with `pnpm add <pkg> --filter <package-name>`.

## Scripts

Run from the repository root; each delegates to the relevant packages via Lerna:

| Script                  | Description                              |
| ----------------------- | ---------------------------------------- |
| `pnpm build`            | Build all packages.                      |
| `pnpm lint`             | Lint all packages.                       |
| `pnpm test`             | Run the Jest unit tests in all packages. |
| `pnpm storybook:static` | Build the static Storybook site.         |

Package-specific scripts (such as `storybook`, `test:e2e` and `test:a11y`) live in each package's `package.json` and can be run with `pnpm --filter <package-name> <script>`.

## Conventions

- **Commits** follow the [Conventional Commits](https://www.conventionalcommits.org/) specification and are validated on commit and in CI.
- **Git hooks** ([Husky](https://typicode.github.io/husky/)) lint and format staged files before each commit.
- **Formatting** is enforced with [Prettier](https://prettier.io/).

## Browser support

The Royal Navy Design System supports all major evergreen browsers.

## Contributing

Read the [Contributing Guidelines](docs/CONTRIBUTING.md) before opening a pull request.

## Licensing

Royal-Navy/design-system is licensed under the [Apache License 2.0](https://github.com/Royal-Navy/design-system/blob/master/LICENSE).

## Thanks

We use [Chromatic](https://www.chromatic.com/) for visual regression testing of Storybook.
