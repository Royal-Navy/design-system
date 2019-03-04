# Royal Navy - Programme Nelson Component Library

The Nelson component library is a multi framework front-end component library built to allow developers to create web based applications for the Royal Navy.

This project contains the source for a number of packages that contain templates for popular front-end frameworks and the sass/css associated with them for all other html applications.

## Getting Started

If you are using the library from an application that uses the component library as a dependency, then install the relavant library using npm, This repo produces:
- `royalnavy@react-component-library`
- `royalnavy@vue-component-library`
- `royalnavy@css-framework`
- `royalnavy@storybook-react-input-state`

If you are developing code in this library then check it out from Github and run `yarn add` from the top level folder, this will in turn install dependencies in all the package sub folders.

## Monorepo layout and package management

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
