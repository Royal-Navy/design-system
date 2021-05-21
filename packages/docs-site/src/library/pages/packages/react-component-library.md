---
title: React Component Library
description: 'A collection of React components written for Royal Navy web applications.'
header: true
---

## Installation

The Royal Navy React Component Library is available as an [NPM package](https://www.npmjs.com/package/@royalnavy/react-component-library).

```
// npm
npm install @royalnavy/react-component-library

// yarn
yarn add @royalnavy/react-component-library
```

NOTE: As of `2.16.0` the [`styled-components`](https://github.com/styled-components/styled-components) package is now a required [peerDependency](https://nodejs.org/en/blog/npm/peer-dependencies/).

## Usage

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyleProvider, Button } from '@royalnavy/react-component-library'

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

## `<GlobalStyleProvider />`

This context provider component applies global Royal Navy Design System styles to your application (resets, normalize and fonts). You should wrap the root of your app in this component.
