# Royalnavy.io

[![CircleCI](https://circleci.com/gh/Royal-Navy/royalnavy.io/tree/master.svg?style=svg&circle-token=088460eafd759c625b9bdcfa5b9d5c59f82fbb2c)](https://circleci.com/gh/Royal-Navy/royalnavy.io/tree/master)
[![Maintainability](https://api.codeclimate.com/v1/badges/41a59d85f86676b4bcf0/maintainability)](https://codeclimate.com/repos/5c7e5acb8824ec5e1c00e2af/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/41a59d85f86676b4bcf0/test_coverage)](https://codeclimate.com/repos/5c7e5acb8824ec5e1c00e2af/test_coverage)
[![Built With Gatsby](https://img.shields.io/badge/Built%20with-GatsbyJs-blueviolet.svg?logo=gatsby)](https://www.gatsbyjs.org/)

The codebase for the royalnavy.io site. It is based on [GatsbyJs](https://www.gatsbyjs.org/)

> **NOTE:**   
 If you are looking for the documentation for this site, you can find it [here](https://github.com/Royal-Navy/standards-toolkit) under `packages/documentation`.

## How to use this repo

### Step one: Installation

In a command line application, simply run `npm install`. This will go and find all therem required dependencies and install them.

> **Note:**  
 This currently contains package dependencies from GitHub.   These may take some time to install and will reside in a  `git_modules` folder. Do not delete this folder.

### Step two: Running the project

Although this is a Gatsby project, the current reliance on GitHub modules requires a slight alteration to running the project. Instead of running `gatsby develop`, please run `npm run develop`. This will ensure you have the latest version of the documentation.

When you have run this command you will be able to find a development copy of the site running at http://localhost:8000. If you wish to see the GraphQL interface, then you can see this at http://localhost:8000/___graphql

## Information for developers  

### Linting

Linting is carried out using Prettier and EsLint, we recommend you download the prettier plugin for your preferred IDE or you can run `npm run lint` in your console, 

> **Note:** Linting is carried out automatically when code is pushed to the repo and a Pull Reqeust is raised. Our checks are run [CodeClimate](https://codeclimate.com) on GitHub.


### Adding new post components

If you want a new component to be available to the markdown renderer, it needs to be imported and registered in the `post-article` component (/src/components/post-article/index.js). Look out for the section below and add your new component to the list:

```js
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
      'note-block': NoteBlock,
      'info-box': InfoBox,
      'grid-container': GridContainer,
      'content-box': ContentBox,
      'swatch': Swatch,
    },
  }).Compiler?
```

## Contacting the standards team

If you are having any problems running this repository, you can either raise an [issue](https://github.com/Royal-Navy/royalnavy.io/issues) or email us at [standards@royalnavy.io](standards@royalnavy.io).