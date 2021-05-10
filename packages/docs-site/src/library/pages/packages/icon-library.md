---
title: Icon Library
description: 'A collection of SVG icons for use in Royal Navy web application development.'
header: true
---

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
