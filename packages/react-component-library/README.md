# React Component Library
A collection of React JS components written for Royal Navy web applications.

## Installation
The Royal Navy React Component Library is available as a npm package.

```
// npm
npm install @royalnavy/react-component-library

// yarn
yarn add @royalnavy/react-component-library
```

If you want to install the prerelease then use the `@next` distribution tag.

## Usage
```javascript
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

## Questions
The Design System is maintained by a team at the Royal Navy. If you want to know more about the Royal Navy Design System, please email the [Design System Team](mailto:standards@royalnavy.io).

## Examples
There is the [Coffee app](https://github.com/Royal-Navy/coffee) which contains examples of how to use the components.

## Documentation
The [documentation website](https://docs.royalnavy.io/) contains all the information you need to build your application using the Royal Navy Design System.

## Contributing
The [contributing guide](https://github.com/Royal-Navy/standards-toolkit/blob/master/docs/contributing.md) resource presents information about our development process. 

## Changelog
If you have recently updated then read the [release notes](https://github.com/Royal-Navy/standards-toolkit/releases)

## Roadmap
The [Design System Roadmap Board](https://github.com/orgs/Royal-Navy/projects/5) contains the work that has been prioritised for the next 12 months.

## License
The Royal Navy Design System is licensed under the [Apache License 2.0](https://github.com/Royal-Navy/standards-toolkit/blob/master/LICENSE)
