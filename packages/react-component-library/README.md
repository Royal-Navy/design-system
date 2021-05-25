# React Component Library

A collection of React components written for Royal Navy web applications.

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

## Questions

The Design System is maintained by a team at the Royal Navy. If you want to know more about the Royal Navy Design System, please email the [Design System Team](mailto:design-system@royalnavy.io).

## Documentation

The [documentation website](https://docs.royalnavy.io/) contains all the information you need to build your application using the Royal Navy Design System.

## End to end tests

Tests are dependent on the application running.

`yarn storybook:test`

### Run all specs

`yarn test:e2e`

## Contributing

The [contributing guide](https://github.com/Royal-Navy/design-system/blob/master/docs/contributing.md) resource presents information about our development process. 

## Changelog

If you have recently updated then read the [release notes](https://github.com/Royal-Navy/design-system/releases)

## Roadmap

The [Design System Roadmap Board](https://github.com/orgs/Royal-Navy/projects/5) contains the work that has been prioritised for the next 12 months.

## License

The Royal Navy Design System is licensed under the [Apache License 2.0](https://github.com/Royal-Navy/design-system/blob/master/LICENSE).
