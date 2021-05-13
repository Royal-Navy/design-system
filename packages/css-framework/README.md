# CSS Framework

NOTE: We now reccomend using design-tokens and a CSS-in-JS solution instead of SASS.

The `@royalnavy/css-framework` package provides a compiled version of the component CSS, the Utility classes and the source SASS. The source SASS can either be used with the component library package, or as a standalone stylesheet.

## Installation

The Royal Navy CSS Framework is available as an [NPM package](https://www.npmjs.com/package/@royalnavy/css-framework).

```
// npm
npm install @royalnavy/css-framework

// yarn
yarn add @royalnavy/css-framework
```

## Usage

Under the hood, the CSS Framework uses [SCSS Modules](http://sass.logdown.com/posts/7858341-the-module-system-is-launched). To include the framework in your application, import it at the top of your main stylesheet as:

```
@use "@royalnavy/css-framework" as rn;
```
The `rn` namespace is an optional value, however we recommend using it to ensure the supplied functions and mixins don't clash with any other frameworks/styles you may use. With the `rn` namespace, all functions are composed as follows:
```
color: rn.color("neutral", "500");
```

## Context

Environment is a huge factor in deciding how we display NELSON applications, therefore it is important to provide the correct Context for your app. The CSS Framework only supports the `light` context currently.

### Retrieving values from a Context

To retrieve values from a context, a number of mixins and functions are supplied. In the following example, we will call the `rn.color()` function, outputting a hex code from the `light` context.
```
rn.color( [NAMESPACE] , [SHADE])
// Examples
rn.color("neutral", "100")
rn.color("danger", "500")
```

[NAMESPACE] - This namespace provides a way to group colours.
[SHADE] - Shades exist between `000` and `900`. The default theme provides a different shade for every multiple of `100`. The `neutral` palette also has values for `black` and `white` keys.


## Customising the Framework

The CSS Framework can be customised to suit your needs. Using the `with` keyword, the following variables can be overridden:

```
$breakpoints;
$colors;
$spacing;
$shadows;
$typography;
$zindex;
```

Overriding these variables will merge the supplied values with the current context values:

```
@use "@royalnavy/css-framework" as rn with (
  $colors: (
    "neutral": (
      "500": #FF0000
    ),
    "supg": (
      "100": #FF00FF
    )
  )
);
```

In the example above, we are updating the `neutral: 000` value to `#FF0000` (red) and adding a new type, `supg`, with its own colour values.

## Utility Classes

Several different Utility classes are provided by this framework. These classes provide a modular way to style components using the Royal Navy Design System styles, without having to author any styles yourself.

## Questions

The Design System is maintained by a team at the Royal Navy. If you want to know more about the Royal Navy Design System, please email the [Design System Team](mailto:design-system@royalnavy.io).

## Documentation

The [documentation website](https://docs.royalnavy.io/) contains all the information you need to build your application using the Royal Navy Design System.

## Contributing

The [contributing guide](https://github.com/Royal-Navy/design-system/blob/master/docs/contributing.md) resource presents information about our development process. 

## Changelog

If you have recently updated then read the [release notes](https://github.com/Royal-Navy/design-system/releases)

## Roadmap

The [Design System Roadmap Board](https://github.com/orgs/Royal-Navy/projects/5) contains the work that has been prioritised for the next 12 months.

## License

The Royal Navy Design System is licensed under the [Apache License 2.0](https://github.com/Royal-Navy/design-system/blob/master/LICENSE).
