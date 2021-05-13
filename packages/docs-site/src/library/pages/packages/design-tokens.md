---
title: Design Tokens
description: 'An agnostic way to store variables such as typography, color, and spacing.'
header: true
---

## Installation

The Royal Navy Design Tokens are available as an [NPM package](https://www.npmjs.com/package/@royalnavy/design-tokens).

```
// npm
npm install @royalnavy/design-tokens

// yarn
yarn add @royalnavy/design-tokens
```

## Selectors

The reccomended way to access tokens is using the supplied selector functions.

Simply import the selector object and then destructure the selectors you want to use out of this.

```javascript
import { selectors } from "@royalnavy/design-tokens";

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

<div className="standard-table">

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

</div>

The selectors are typed. We reccomend using the hinting in your IDE to see the signatures and available arguments for each selector. Alternatively, you can see the raw tokens [here on GitHub](https://github.com/Royal-Navy/design-system/tree/master/packages/design-tokens/src/tokens).

## Raw Tokens

It's also possible to access the raw underlying tokens.

We consider these to be implementation detail (they may change without notice), as such we recommend using selectors over raw tokens in most instances.

### JavaScript

```javascript
import { ColorNeutral100 } from '@royalnavy/design-tokens'
```

### SASS

```css
@use '@royalnavy/design-tokens' as $vars
```
