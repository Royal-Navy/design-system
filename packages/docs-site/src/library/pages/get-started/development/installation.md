---
title: Installation & quick start
description: ''
header: true
---

import CodeHighlighter from '../../../../components/presenters/code-highlighter'

## Installation & quick start

To install and save to your projects package.json dependencies, run:

```
// with npm
npm install @royalnavy/css-framework @royalnavy/react-component-library

// ...or with yarn
yarn add @royalnavy/css-framework @royalnavy/react-component-library
```

### Quick start

Here's a quick example application to get you started:

<CodeHighlighter 
source={`i${''}mport React from 'react'
i${''}mport ReactDOM from 'react-dom'
i${''}mport '@royalnavy/css-framework/dist/style.css'
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
