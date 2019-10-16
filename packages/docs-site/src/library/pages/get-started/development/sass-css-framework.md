---
title: SASS/CSS framework
description: ''
header: true
---

The @royalnavy/css-framework package provides a compiled version of the component CSS, the Utility classes and the source SASS.

The source SASS can be used independently of the component library package, allowing you to make use of included functions and mixins.

### Context

Environment is a huge factor in deciding how we display NELSON applications, therefore it is important to provide the correct Context for your app.

By default, the Context provided is `light`. The full list of available Contexts are listed below:
```
- Light
- Dark [UNAVAILABLE]
- Ship Ops [UNAVAILABLE]
- Touch Device [UNAVAILABLE]
```

### Retrieving values from a Context

To retrieve a colour from the Context map, a `color()` function is provided.
```
color( [NAMESPACE] , [SHADE] , [STATE?] )
// Examples
color(text, 00, error)
color(ui, 60)
```

[NAMESPACE] - This namespace provides a way to group colours. The default theme provides values for both `text` and `ui`.
[SHADE] - Shades exist between `00` and `100`. The default theme provides a different shade for every multiple of `20`.
[STATE] - Optional. Allows you to quickly modify a color into a particular state, e.g. adding `error` will swap the default colour to the error equivalent.


### Extending a Context

To add or change any colour values provided by a Context, use the `$theme-extend: ()` map. Any values added here will be merged with the current theme, allowing you to access these new values in your application.

An example of this may be:

```
$theme-extend: (
  text: (
    00: #FF0000
  ),
  data: (...)
);
```

In the example above, we are updating the `text 00` value to `#FF0000` (red) and adding a new type, `data`, with its own colour values.

---

## Utility Classes

Several different Utility classes are provided by this framework. This is to ensure consistency when building applications and mitigate any UI bugs that could occur by leaking styles.

## z-index

To ensure correct z-axis stacking in NELSON applications, a z-index Utility class is provided.

z-index can be set via a mixin named z-index:
```
@include z-index( [GROUP] )
```

The provided z-index groups are as follows in order of highest to lowest level:
```
- modal
- overlay
- dropdown
- header
- footer
- body
```

An optional modifier value can be added to the z-index mixin, which will be added to the group’s z-index. This optional modifier has a range of `1-999`. Anything exceeding this will be ignored and the base z-index for the group will be returned.

```
.foo {
  @include z-index(modal, 132);
}

// returns
.foo {
  z-index: 7132;
}
```

## Breakpoints

**NELSON** applications are built Mobile First. A number of breakpoints are provided by default and also tie into the Spacing Utility classes and variables:

```
- root: 0px
- s: 576px
- m: 768px
- l: 992px
- xl: 1200px
- xxl: 1400px
```
To use these breakpoints in a media query:
```
@include breakpoint('s') {
  .foo {
    color: red;
  }
}

// Result
@media only screen and (min-width: 576px) {
  .foo {
    color: red;
  }
}
```
