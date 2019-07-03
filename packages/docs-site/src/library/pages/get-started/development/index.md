---
title: Get started - Development
description: ''
tags: public
pageClass: ''
template: default
---

## Get started - Development

The Standards Toolkit provides a multi-framework, responsive component library and SASS framework built to help developers create standards compliant web applications for the Royal Navy.

### Supported technologies

The following view layer libraries are currently supported:

- React

### Installation

To install and save to your projects package.json dependencies, run:

```
// with npm
npm install @royalnavy/css-framework @royalnavy/react-component-library

// ...or with yarn
yarn add @royalnavy/css-framework @royalnavy/react-component-library
```

### Usage

Please refer to the component demo pages to see live examples, code snippets and details on how to cosume each of the components.

#### Quick Start

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

### SASS/CSS Framework

The @royalnavy/css-framework package provides both a compiled version of the component CSS and helper classes in thier entirety and also the source SASS.

The source SASS can be used independently of the component library package, allowing you to make use of included functions and mixins.

### Browser Support

The Standards Toolkit currently supports all major evergreen browsers.

### Contributing & Issues

If you would like to make a contribution or raise an issue with the Standards Toolkit you can do so on [GitHub](https://github.com/Royal-Navy/standards-toolkit).

### Licensing

The Royal-Navy/standards-toolkit is licensed under the Apache License 2.0.
