# React Component Library

A collection of React components written for Royal Navy web applications.

## Installation

The Royal Navy React Component Library is available as an [NPM package](https://www.npmjs.com/package/@royalnavy/react-component-library).

To install it, run the relevant command for your package manager:

```shell
// npm
npm install @royalnavy/fonts @royalnavy/react-component-library styled-components

// yarn
yarn add @royalnavy/fonts @royalnavy/react-component-library styled-components
```

Note: [`styled-components`](https://styled-components.com/) is a required [peer dependency](https://nodejs.org/en/blog/npm/peer-dependencies/) and is installed with the above command.

## Usage

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import '@royalnavy/fonts'
import { GlobalStyleProvider, Button } from '@royalnavy/react-component-library'
import { lightTheme } from '@royalnavy/design-tokens'

function App() {
  return (
    <GlobalStyleProvider theme={lightTheme}>
      <Button variant="primary">Hello, World!</Button>
    </GlobalStyleProvider>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

## `<GlobalStyleProvider />`

This context provider component applies global Royal Navy Design System styles
to your application (resets, normalize and fonts). You should wrap the root of your
app in a single instance of this component. (Take care to avoid having multiple
instances mounted at once, as this will lead to duplicated global styles.)

### Theming

By default the `GlobalStyleProvider` will use the `lightTheme` exported by the `@royalnavy/design-tokens` package. You can create your own themes by injecting your own custom token set via the `theme` prop.

We recommend reading the following blog post on [`styled-theming`](https://jamie.build/styled-theming.html). Using this pattern you can selectively theme individual components. Inverting responsibility for the implementation of the theme to the component itself.

When utilising this pattern remember to extend a base token set:

```javascript
<GlobalStyleProvider theme={{ ...lightTheme, customThemeMode: 'foo' }} />
```

## Hooks

### `useFloatingElement`

This hook aids in the positioning of arbitrary elements relative to a target element. The positioning engine will intelligently position the element based on available screen real-estate.

```javascript
import { useFloatingElement } from '@royalnavy/react-component-library'

const Example = () => {
  const {
    targetElementRef,
    floatingElementRef,
    arrowElementRef,
    styles,
    attributes,
  } = useFloatingElement(placement)

  return (
    <>
      <Target ref={targetElementRef} />
      <Float
        ref={floatingElementRef}
        style={styles.popper}
        {...attributes.popper}
      >
        Hello, World!
      </Float>
    </>
  )
}
```

The hook wraps a popular underlying positioning engine called [Popper](https://github.com/popperjs/react-popper).

If you want opinionated styling for your floating element please consider the Popover component.

## Questions

The Design System is maintained by a team at the Royal Navy. 
If you want to know more about the Royal Navy Design System, please email the [Design System Team](mailto:navydigital-dnadesignsystem@mod.gov.uk).

## Documentation

The [documentation website](https://storybook.design-system.navy.digital.mod.uk/) contains all the information you need to build your application using the Royal Navy Design System.

## End-to-end tests

End-to-end tests run in both Chrome and Firefox using [Playwright](https://playwright.dev/).
Tests are dependent on the Storybook running with a test configuration:

```
yarn storybook:test
```

Playwright browsers and dependencies also have to be installed:

```
yarn test:e2e:install
```

### Run all tests

```
yarn test:e2e
```

### Run specific tests

```
yarn test:e2e <regex>
```

### Run all tests with tracing

```
yarn test:e2e:trace
```

### Open the HTML test report

```
yarn test:e2e:show-report
```

## Contributing

The [contributing guide](https://github.com/Royal-Navy/design-system/blob/master/docs/contributing.md) resource presents information about our development process.

## Changelog

If you have recently updated then read the [release notes](https://github.com/Royal-Navy/design-system/releases)

## Roadmap

The [Design System Roadmap Board](https://github.com/Royal-Navy/design-system/projects/7) contains the work that has been prioritised for the next 12 months.

