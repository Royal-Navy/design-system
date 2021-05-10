---
title: Fonts
description: 'The CSS and web font files for self-hosting "Lato".'
header: true
---

## Installation

The Royal Navy Fonts are available as an [NPM package](https://www.npmjs.com/package/@royalnavy/fonts).

```
// npm
npm install @royalnavy/fonts

// yarn
yarn add @royalnavy/fonts
```

## Usage

The package includes all necessary font files (ttf) and a CSS file with font-face declarations pointing at these files.

You will need to have webpack setup to load css and font files. Many tools built with webpack will work out of the box, such as [Create React App](https://github.com/facebook/create-react-app).

To use, simply require the package in your project’s entry file e.g.

```javascript
import '@royalnavy/fonts'
```
