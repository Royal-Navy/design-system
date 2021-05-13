# Icon Library

A collection of SVG icons for use in Royal Navy web application development.

## Browse Icons & Silhouettes

The icon library uses the [Google Material icon set](https://material.io/resources/icons/) as a baseline. 

It has been extended and supplemented with domain specific icons and [silhouettes](https://github.com/Royal-Navy/design-system/tree/master/packages/icon-library/src/assets/silhouettes).

## Installation

The Royal Navy Icon Library is available as an [NPM package](https://www.npmjs.com/package/@royalnavy/icon-library).

```
// npm
npm install @royalnavy/icon-library

// yarn
yarn add @royalnavy/icon-library
```

## Usage

```javascript
import { IconHome } from '@royalnavy/icon-library'
import { SilhouetteAircraftCarrier } from '@royalnavy/icon-library'

// <IconHome size={16} />
// <SilhouetteAircraftCarrier size={128} />
```

## Sizing

The `size` prop sets the `width` and `height` attribute values of the wrapped SVG.

## Contributing

Add an SVG icon to `src/assets/**/` and run `yarn build` to generate the consumable artefacts.

The [contributing guide](https://github.com/Royal-Navy/design-system/blob/master/docs/contributing.md) resource presents information about our development process. 

## Questions

The Design System is maintained by a team at the Royal Navy. If you want to know more about the Royal Navy Design System, please email the [Design System Team](mailto:design-system@royalnavy.io).

## Documentation

The [documentation website](https://docs.royalnavy.io/) contains all the information you need to build your application using the Royal Navy Design System.

## Changelog

If you have recently updated then read the [release notes](https://github.com/Royal-Navy/design-system/releases)

## Roadmap

The [Design System Roadmap Board](https://github.com/orgs/Royal-Navy/projects/5) contains the work that has been prioritised for the next 12 months.

## License

The Royal Navy Design System is licensed under the [Apache License 2.0](https://github.com/Royal-Navy/design-system/blob/master/LICENSE).

