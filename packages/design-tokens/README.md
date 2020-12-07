# Design Tokens
An agnostic way to store variables such as typography, color, and spacing.

## Installation
The Royal Navy Design Tokens are available as a NPM package.

```
// npm
npm install @royalnavy/design-tokens

// yarn
yarn add @royalnavy/design-tokens
```

If you want to install the prerelease then use the `@next` distribution tag.

## Usage - SASS
```css
@use '@royalnavy/design-tokens' as $vars
```
NOTE: Application developers should consider consuming the @royalnavy/css-framework package instead of this package.

## Usage - Styled Components
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

## Questions
Design Tokens is maintained by a team at the Royal Navy. If you want to know more, please email the [Design System team](mailto:design-system@royalnavy.io).

## Contributing
The [contributing guide](https://github.com/Royal-Navy/design-system/blob/master/docs/contributing.md) resource presents information about our development process. 

## Changelog
If you have recently updated then read the [release notes](https://github.com/Royal-Navy/design-system/releases)

## Roadmap
The [Design System Roadmap Board](https://github.com/orgs/Royal-Navy/projects/5) contains the work that has been prioritised for the next 12 months.

## License
Design Tokens is licensed under the [Apache License 2.0](https://github.com/Royal-Navy/design-system/blob/master/LICENSE)
