---
title: Installation & quick start
description: ''
header: true
---

import CodeHighlighter from '../../../../components/presenters/code-highlighter'

## Installation

To install and save to your project's package.json dependencies, run:

```
// with npm
npm install @royalnavy/css-framework @royalnavy/react-component-library

// ...or with yarn
yarn add @royalnavy/css-framework @royalnavy/react-component-library
```

### Quick start

Here's a quick example of an application to get you started:

<CodeHighlighter 
source={`i${''}mport React from 'react'
i${''}mport ReactDOM from 'react-dom'
i${''}mport '@royalnavy/css-framework/dist/styles.css'
i${''}mport { Button } from '@royalnavy/react-component-library'
\nfunction App() {
  return (
    <Button variant="primary">
      Hello, World!
    </Button>
  )
}
\nReactDOM.render(<App />, document.querySelector('#app'))`}
language="javascript"
/>
