# React Component Library

A collection of React components written for Defence Digital web applications.

## Installation

The Defence Digital React Component Library is available as an [NPM package](https://www.npmjs.com/package/@royalnavy/react-component-library).

```
// npm
npm install @royalnavy/fonts @royalnavy/react-component-library

// yarn
yarn add @royalnavy/fonts @royalnavy/react-component-library
```

NOTE: As of `2.16.0` the [`styled-components`](https://github.com/styled-components/styled-components) package is now a required [peerDependency](https://nodejs.org/en/blog/npm/peer-dependencies/).

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
      <Button variant="primary">
        Hello, World!
      </Button>
    </GlobalStyleProvider>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

## `<GlobalStyleProvider />`

This context provider component applies global Defence Digital Design System styles to your application (resets, normalize and fonts). You should wrap the root of your app in this component.

### Theming

By default the `GlobalStyleProvider` will use the `lightTheme` exported by the `@royalnavy/design-tokens` package. You can create your own themes by injecting your own custom token set via the `theme` prop.

We recommend reading the following blog post on [`styled-theming`](https://jamie.build/styled-theming.html). Using this pattern you can selectively theme individual components. Inverting responsibility for the implementation of the theme to the component itself.

When utilising this pattern remember to extend a base token set:

```javascript
<GlobalStyleProvider theme={{ ...lightTheme, customThemeMode: 'foo' }} />
```

## Hooks

### `useFloatingElement`

This hook aids in the positioning of arbitrary elements relative to a target element. The positoning engine will intelligently position the element based on available screen real-estate.

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

If you want opinionated styling for your floating element please consider the [Popover](https://storybook.royalnavy.io/?path=/docs/popover--default) component.

## Questions

The Design System is maintained by a team at the Defence Digital. If you want to know more about the Defence Digital Design System, please email the [Design System Team](mailto:design-system@royalnavy.io).

## Documentation

The [documentation website](https://docs.royalnavy.io/) contains all the information you need to build your application using the Defence Digital Design System.

## End to end tests

Tests are dependent on the application running.

`yarn storybook:test`

### Run all specs

`yarn test:e2e`

## Contributing

The [contributing guide](https://github.com/defencedigital/mod-uk-design-system/blob/master/docs/contributing.md) resource presents information about our development process. 

## Changelog

If you have recently updated then read the [release notes](https://github.com/defencedigital/mod-uk-design-system/releases)

## Roadmap

The [Design System Roadmap Board](https://github.com/defencedigital/mod-uk-design-system/projects/7) contains the work that has been prioritised for the next 12 months.

## License

The Defence Digital Design System is licensed under the [Apache License 2.0](https://github.com/defencedigital/mod-uk-design-system/blob/master/LICENSE).
