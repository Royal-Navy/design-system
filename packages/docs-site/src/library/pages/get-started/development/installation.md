---
title: Installation & Quick Start
description: ''
---

## Installation & Quick Start

To install and save to your projects package.json dependencies, run:

```
// with npm
npm install @royalnavy/css-framework @royalnavy/react-component-library

// ...or with yarn
yarn add @royalnavy/css-framework @royalnavy/react-component-library
```

### Quick Start

Here's a quick example application to get you started:

```
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
