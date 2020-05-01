# Fonts
The CSS and web font files for self-hosting "Lato".

## Installation
The Royal Navy Fonts are available as a npm package.

```
// npm
npm install @royalnavy/fonts

// yarn
yarn add @royalnavy/fonts
```

If you want to install the prerelease then use the `@next` distribution tag.

## Usage
The package includes all necessary font files (ttf) and a CSS file with font-face declarations pointing at these files.

You will need to have webpack setup to load css and font files. Many tools built with webpack will work out of the box, such as [Create React App](https://github.com/facebook/create-react-app).

To use, simply require the package in your project’s entry file e.g.

```javascript
import '@royalnavy/fonts'
```

## Questions
The Fonts package is maintained by a team at the Royal Navy. If you want to know more, please email the [Design System team](mailto:standards@royalnavy.io).

## Contributing
The [contributing guide](https://github.com/Royal-Navy/standards-toolkit/blob/master/docs/contributing.md) resource presents information about our development process. 

## Changelog
If you have recently updated then read the [release notes](https://github.com/Royal-Navy/standards-toolkit/releases)

## Roadmap
The [Design System Roadmap Board](https://github.com/orgs/Royal-Navy/projects/5) contains the work that has been prioritised for the next 12 months.

## Licence
The contained fonts are licensed under the [SIL OPEN FONT LICENSE Version 1.1](https://github.com/Royal-Navy/standards-toolkit/blob/develop/packages/fonts/LICENSE).
