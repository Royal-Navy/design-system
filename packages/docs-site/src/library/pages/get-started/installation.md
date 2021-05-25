---
title: Installation & quick start
description: ''
header: true
---

import CodeHighlighter from '../../../components/presenters/code-highlighter'

## Installation

To install and save to your project's package.json dependencies, run:

```
// with npm
npm install @royalnavy/css-framework @royalnavy/react-component-library

// ...or with yarn
yarn add @royalnavy/css-framework @royalnavy/react-component-library
```

NOTE: As of `2.16.0` the [`styled-components`](https://github.com/styled-components/styled-components) package is now a required [peerDependency](https://nodejs.org/en/blog/npm/peer-dependencies/).

### Quick start

Here's a quick example of an application to get you started:

<CodeHighlighter 
source={`i${''}mport React from 'react'
i${''}mport ReactDOM from 'react-dom'
i${''}mport { GlobalStyleProvider, Button } from '@royalnavy/react-component-library'
\nfunction App() {
  return (
    <GlobalStyleProvider>
      <Button variant="primary">
        Hello, World!
      </Button>
    </GlobalStyleProvider>
  )
}
\nReactDOM.render(<App />, document.querySelector('#app'))`}
language="javascript"
/>
