---
title: Migrating to v2
description: 'This guide will show you how to upgrade your codebase to work with v2'
header: true
---

# CSS Framework

The Royal Navy Design System v2 is a major refactor of the CSS Framework. It introduces a number of under-the-hood tweaks that improve both its performance and accuracy to the Sketch Toolkit.

## SCSS Modules
The Royal Navy Design System v2 has been ported to [SASS Modules](http://sass.logdown.com/posts/7858341-the-module-system-is-launched). This provides the ability to namespace all Royal Navy Design System functions & mixins, scope all variables locally to the file they are declared in, and keep the outputted file size down as `@use` only includes the imported file once across the entire project.


- Your application should have a single entry-point for `scss`. The best way to achieve this is to create an `index.scss` file in the root of your project and `@use` every Sass file across your codebase. Then, import the `index.scss` file (and only this file) _once_ into your main JS entry-point - avoid importing SCSS files into individual `js` component files. At the top of your `index.scss` file, `@use` the Design System CSS framework, as noted below.
- All instances of `@import "@royalnavy/css-framework"` should be replaced with `@use "@royalnavy/css-framework" as rn`. Whilst the `rn` namespace is optional, we recommend using this as it will prevent the Royal Navy Design System CSS Framework from clashing with any other SCSS files that may be imported into the project. 
- Alternatively, the CSS Framework can be imported as `@use "@royalnavy/css-framework" as *`. This will add all functions and mixins to the global scope, meaning you don’t have to namespace your function calls.
- Every file that requires any mixins or functions from the CSS Framework should individually call `@use “@royalnavy/css-framework” as rn`. Unlike the `@import` syntax, `@use` ensures the imported file is only compiled once, rather than every time it is imported. This prevents duplicate styles and should cut down your outputted CSS’s file size.
- You must use the `sass` npm package, rather than `node-sass`. `sass` uses Dart under the hood, as apposed to Node. Dart is the primary implementation of the Sass language and currently is the only version to support Modules.

To gain an understanding of the CSS Framework's architecture, use [this PDF](/css-framework-architecture.pdf) as a reference.


# Functions & Mixins
- All functions and mixins now use quotes for their arguments - be sure to update these function calls, otherwise your build will fail.
- If you are using the `rn` namespace as outlined above, ensure all function & mixin calls are prepended with it (e.g. `rn.color(“neutral”, “500”)`.

## Colours
The colour palette has been expanded to include an extra colours, under the namespace “supplementary” (`sup`). v2 also renames several of the colours to improve consistency. Because of this, several functions will need to be updated with their new argument values.

- `primary` colour has been renamed `action` - this better describes the colour’s main usage. 
- `alt primary` has been renamed to `supa`.
- `alt success` has been renamed to `supf`.
- `alt warning` has been renamed to `supb`.
- Additional colours `supb`, `supc`, `supd`, and `supe`  have been added.

All renamed colours should have their function calls updated to the new names.

# Spacing
The Royal Navy Design System supplies pre-determined spacing values to maintain consistency across all our applications and to ensure the designs from the Sketch library correlate with our code output.

In `v2`, the Spacing scale has been updated as follows:

<div className="standard-table">

| Current Scale  | Updated Scale | Computed Value*   |
|----------------|---------------|-------------------|
| 0              | 0             | `0`               |
| -              | 1             | `2px`             |
| 1              | 2             | `4px`             |
| -              | 3             | `6px`             |
| 2              | 4             | `8px`             |
| -              | 5             | `10px`            |
| 3              | 6             | `12px`            |
| -              | 7             | `14px`            |
| 4              | 8             | `16px`            |
| -              | 9             | `18px`            |
| 5              | 10            | `20px`            |
| 6              | 11            |  `24px`           |
| 8              | 12            | `32px`            |
| 10             | 13            | `40px`            |
| 12             | 14            | `48px`            |
| 16             | 15            | `64px`            |
| 20             | 16            | `80px`            |
| 24             | 17            | `96px`            |
| -              | 18            | `112px`           |
| -              | 19            | `128px`           |
| -              | 20            | `144px`           |
| px             | px            | `1px`             |
| full           | full          | `100%`            |

</div>

You will need to update your `rn.spacing()` functions with the new, updated values.

\* Note: As the Spacing Scale is sized in `rems`, this is the assumed value based on an html `font-size` of `100%` (`16px` default `font-size` for Browsers).

## Typography

- Makes the `base` scale position `0.875rem` (`14px` at body `font-size: 100%`). 
- Balances the scale so that it runs `xxs` through `xxl`, rather than `xxxs` through `xl`.

<div className="standard-table">

| Current Scale  | Updated Scale | Computed Value (rems) |
|----------------|---------------|-----------------------|
| `xxxs`         | `xxs`         | `0.5`                 |
| `xxs`          | `xs`          | `0.625`               |
| `xs`           | `s`           | `0.75`                |
| `s`            | `base`        | `0.875`               |
| `base`         | `m`           | `1`                   |
| `m`            | `l`           | `1.125`               |
| `l`            | `xl`          | `1.25`                |
| `xl`           | `xxl`         | `1.5`                 |
| `display`      | `display`     | `1.875`               |
| `display-l`    | `display-l`   | `2.25`                |
| `display-xl`   | `display-xl`  | `3`                   |

</div>

You will need to update your `rn.font-size()` functions & mixins with the new, updated values.


## Breakpoints
- Normalises Breakpoint scale so  `font-size: 100%`  has a value of `16px` at the `1200px - 1400px` breakpoint.
- Removes the `xxxl` breakpoint and adds in the `xs` breakpoint. This bumps all scale positions down a breakpoint.

<div className="standard-table">

| Current Scale | Updated Scale | Breakpoint Size (px) |
|---------------|---------------|----------------------|
| `root`        | `root`        | `0`                  |
| `s`           | `xs`          | `576`                |
| `m`           | `s`           | `768`                |
| `l`           | `m`           | `1024`               |
| `xl`          | `l`           | `1200`               |
| `xxl`         | `xl`          | `1400`               |
| `xxxl`        | `xxl`         | `1600`               |

</div>

You will need to update your `@include breakpoint()` mixins with the new, updated values.


## Helpers
- `helper` classes have been renamed to `utility`in v2. This is to better align the Royal Navy Design System with the industry standard of “Utility classes”, which better describe their function, rather than “Helper classes”.
- Utility class namespace has been updated with `.rn_` to be more consistent with the `.rn-` component namespace.

All instances of the utility classes that use the old `.h_` syntax will need to be updated to `.rn_`. Alternatively, you can set the `$utility-ns` value back to `h_` when you initialise the project. See below for more details.

## Overriding the Toolkit

With the new module system, it is easier than ever to override values provided by the Royal Navy Design System. When `@use`-ing the CSS Framework, you can assign the provided variables your own values to override any that exist in the Context. The variables that can be overridden are:

```
// Fonts
$font-size:   16px !default;
$font-family: "lato" !default;

// Choose Context
$context: "light" !default;

// Adjust Context values
$breakpoints: () !default;
$colors:      () !default;
$spacing:     () !default;
$shadows:     () !default;
$typography:  () !default;
$zindex:      () !default;


// Utility Namespace
$utility-ns: "rn_";

// General Housekeeping
$content-width: 1280px;
$animation-timing: 0.3s;
```

To override any of these variables in the CSS Framework, use the `with ()` syntax:

```
@use "@royalnavy/css-framework" as rn with (
  $utiliy-ns: "h_",
  $colors: (
    "neutral": (
      "500": #FF0000
    )
  )
);
```

This will merge the values provided inside `with ()` with the default context variables.

# React Components
The interfaces for components have been updated.

## Flag Props
All boolean flags have been renamed so that they reflect a question that can be answered. As an example `active` is now `isActive`. Examples of other name prefixes are `can` and `has`.

## Compound Components
A compound component pattern has been adopted so that components are composed in a more flexible manner. This is an improvement for the developer as it further utilises the JSX interface. The big benefit is that it gives the developer an opportunity to customise components by swapping out sub components for custom implementations.

From [React.js - Compound Components](https://medium.com/@Dane_s/react-js-compound-components-a6e54b5c9992):

> A compound component is a type of component that manages the internal state of a feature while delegating control of the rendering to the place of implementation opposed to the point of declaration. They provide a way to shield feature specific logic from the rest of the app providing a clean and expressive API for consuming the component. Internally they are built to operate on a set of data that is passed in through children instead of props. Behind the scenes they make use of React’s lower level API such as React.children.map(), and React.cloneElement(). Using these methods, the component is able to express itself in such a way that promotes patterns of composition and extensibility.

Note that a hybrid pattern is being used. In most instances the sub components will be passed using the `children` prop. If the component has multiple sub components then these are passed in as props. As TypeScript is being used this is a more type safe option, and it also aligns with the preferred approach demonstrated in the [React documentation](https://reactjs.org/docs/composition-vs-inheritance.html).

## Affected components
- [Avatar](/components/avatar)
- [Breadcrumbs](/components/breadcrumbs)
- [Button](/components/button)
- [ButtonGroup](/components/buttongroup)
- [Checkbox](/components/form/checkbox)
- [Dialog](/components/dialog)
- [Dropdown](/components/dropdown)
- [Masthead](/components/masthead)
- [Notifications](/components/notifications)
- [NumberInput](/components/form/number-input)
- [Pagination](/components/pagination)
- [PhaseBanner](/components/phase-banner)
- [Radio](/components/form/radio)
- [RangeSlider](/components/range-slider)
- [Sidebar](/components/sidebar)
- [TabSet](/components/tab-set)
- [Table](/components/table)
- [TextArea](/components/textarea)
- [TextInput](/components/form/input)

