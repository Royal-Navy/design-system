# Royal Navy HTML Component Library

This tool allows a developer to use components from the Royal Navy component library using plain HTML/CSS. For those
components that require further interaction the script in this project progressively enhances them.

Using this method a developer can create a site that renders plain HTML on the server before being improved on the client.

## Installation

Checkout this project from Github then run `Yarn install` at the top level followed by `yarn build` in the `packages/html-component-library`
folder. Alternatively you can get a copy of the package using `npm install @royalnavy/html-component-library`. In either case
include the `dist/navy-html-component-library.js` file in your webpage along with the css file from the `@royalnavy/css-framework`
project.

## Development
To develop and test enhancements use the `yarn watch` script and load the index.html file in the public folder. Note that you
will need to manually refresh the page when code is compiled.
