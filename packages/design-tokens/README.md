# Design Tokens

An agnostic way to store variables such as typography, color, and spacing.

## Installation

The Defence Digital Design Tokens are available as an [NPM package](https://www.npmjs.com/package/@defencedigital/design-tokens).

```
// npm
npm install @defencedigital/design-tokens

// yarn
yarn add @defencedigital/design-tokens
```

## Selectors

The reccomended way to access tokens is using the supplied selector functions.

Simply import the selector object and then destructure the selectors you want to use out of this.

```javascript
import { selectors } from "@defencedigital/design-tokens";

const { color, spacing, mediaQuery } = selectors

// inside a styled-component
const StyledExample = styled.div`
  color: ${color('action', '500')};
  margin-top: ${spacing('2')};

  ${mediaQuery({ gte: 'xs', lt: 'xl', media: '' })`
    // @media and (min-width:576px) and (max-width:1400px)
    color: black;
  `}
`;
```

| Selector   | Alias | Example Return Value                               | Description                                                       |
|------------|-------|----------------------------------------------------|-------------------------------------------------------------------|
| animation  |       | `0.2s`                                             | Animation timing values.                                          |
| breakpoint |       | `{   breakpoint: '768px',   baseFontSize: '96%' }` | Raw object containing `breakpoint` and associated `baseFontSize`. |
| mediaQuery | mq    |  See usage example above.                                                  | Tagged template literal that generates a media query string.      |
| color      |       | `#FFFFFF`                                          | A color value as a hex string.                                    |
| shadow     |       | `0 1px 3px rgba(0, 0, 0, 0.04)`                    | Preset `box-shadow` values.                                       |
| spacing    |       | `0.5rem`                                           | Fixed spacing value in REMs.                                      |
| fontSize   |       | `0.5rem`                                           | Fixed `font-size` value in REMs.                                  |
| zIndex     |       | `6001`                                             | Scoped `z-index` value with optional modifier.                    |

The selectors are typed. We reccomend using the hinting in your IDE to see the signatures and available arguments for each selector. Alternatively, you can see the raw tokens [here on GitHub](https://github.com/defencedigital/mod-uk-design-system/tree/master/packages/design-tokens/src/tokens).

## Raw Tokens

It's also possible to access the raw underlying tokens.

We consider these to be implementation detail (they may change without notice), as such we recommend using selectors over raw tokens in most instances.

### JavaScript

```javascript
import { ColorNeutral100 } from '@defencedigital/design-tokens'
```

### SASS

```css
@use '@defencedigital/design-tokens' as $vars
```

## Questions

The Design System is maintained by a team at the Defence Digital. If you want to know more about the Defence Digital Design System, please email the [Design System Team](mailto:design-system@defencedigital.io).

## Documentation

The [documentation website](https://docs.royalnavy.io/) contains all the information you need to build your application using the Defence Digital Design System.

## Contributing

The [contributing guide](https://github.com/defencedigital/mod-uk-design-system/blob/master/docs/contributing.md) resource presents information about our development process. 

## Changelog

If you have recently updated then read the [release notes](https://github.com/defencedigital/mod-uk-design-system/releases)

## Roadmap

The [Design System Roadmap Board](https://github.com/defencedigital/mod-uk-design-system/projects/7) contains the work that has been prioritised for the next 12 months.

## License

The Defence Digital Design System is licensed under the [Apache License 2.0](https://github.com/defencedigital/mod-uk-design-system/blob/master/LICENSE).
