---
title: SASS/CSS framework
description: ''
header: true
---

The @royalnavy/css-framework package provides a compiled version of the component CSS, the Utility classes and the source SASS. The source SASS can either be used with the component library package, or as a standalone stylesheet.

Under the hood, the CSS Framework uses [SCSS Modules](http://sass.logdown.com/posts/7858341-the-module-system-is-launched). To include the framework in your application, import it at the top of your main stylesheet as:
```
@use "@royalnavy/css-framework" as rn;
```
The `rn` namespace is an optional value, however we recommend using it to ensure the supplied functions and mixins don't clash with any other frameworks/styles you may use. With the `rn` namespace, all functions are composed as follows:
```
color: rn.color("neutral", "500");
```

### Context

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


### Customising the Framework

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

---

## Utility Classes

Several different Utility classes are provided by this framework. These classes provide a modular way to style components using the Standards Toolkit styles, without having to author any styles yourself.
