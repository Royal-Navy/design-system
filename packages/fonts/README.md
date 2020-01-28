# Fonts

The CSS and web font files to easily self-host “Lato”.

## Usage

The package includes all necessary font files (ttf) and a CSS file with font-face declarations pointing at these files.

You will need to have webpack setup to load css and font files. Many tools built with Webpack will work out of the box, such as [Create React App](https://github.com/facebook/create-react-app).

To use, simply require the package in your project’s entry file e.g.

```javascript
// Load Lato typeface
import '@royalnavy/fonts'
```

## Licence

The contained fonts are licensed under the [SIL OPEN FONT LICENSE Version 1.1](https://github.com/Royal-Navy/standards-toolkit/blob/develop/packages/fonts/LICENSE).
