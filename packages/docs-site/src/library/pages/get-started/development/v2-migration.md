---
title: Migrating to Standards Toolkit v2
description: 'This guide will show you how to upgrade your codebase to work with v2'
header: true
---

The Standards Toolkit v2 is a major refactor of the CSS Framework. It introduces a number of under-the-hood tweaks that improve both its performance and accuracy to the Sketch Toolkit.

# SCSS Modules
The Standards Toolkit v2 has been ported to [SASS Modules](http://sass.logdown.com/posts/7858341-the-module-system-is-launched). This provides the ability to namespace all Standards Toolkit functions & mixins, scope all variables locally to the file they are declared in, and keep the outputted file size down as `@use` only includes the imported file once across the entire project.


- Your application should have a single entry-point for `scss`. The best way to achieve this is to create an `index.scss` file in the root of your project and `@use` every Sass file across your codebase. Then, import the `index.scss` file (and only this file) _once_ into your main JS entry-point - avoid importing SCSS files into individual `js` component files. At the top of your `index.scss` file, `@use` the Standards CSS framework, as noted below.
- All instances of `@import "@royalnavy/css-framework"` should be replaced with `@use "@royalnavy/css-framework" as rn`. Whilst the `rn` namespace is optional, we recommend using this as it will prevent the Standards Toolkit CSS Framework from clashing with any other SCSS files that may be imported into the project. 
- Alternatively, the CSS Framework can be imported as `@use "@royalnavy/css-framework" as *`. This will add all functions and mixins to the global scope, meaning you don’t have to namespace your function calls.
- Every file that requires any mixins or functions from the CSS Framework should individually call `@use “@royalnavy/css-framework” as rn`. Unlike the `@import` syntax, `@use` ensures the imported file is only compiled once, rather than every time it is imported. This prevents duplicate styles and should cut down your outputted CSS’s file size.
- You must use the `sass` npm package, rather than `node-sass`. `sass` uses Dart under the hood, as apposed to Node. Dart is the primary implementation of the Sass language and currently is the only version to support Modules.

To gain an understanding of the CSS Framework's architecture, use [this PDF](/css-framework-architecture.pdf) as a reference.

# Functions & Mixins
- All functions and mixins now use quotes for their arguments - be sure to update these function calls, otherwise your build will fail.
- If you are using the `rn` namespace as outlined above, ensure all function & mixin calls are prepended with it (e.g. `rn.color(“neutral”, “500”)`.

# Colours
The colour palette has been expanded to include an extra colours, under the namespace “supplementary” (`sup`). v2 also renames several of the colours to improve consistency. Because of this, several functions will need to be updated with their new argument values.

- `primary` colour has been renamed `action` - this better describes the colour’s main usage. 
- `alt primary` has been renamed to `supa`.
- `alt success` has been renamed to `supf`.
- `alt warning` has been renamed to `supb`.
- Additional colours `supb`, `supc`, `supd`, and `supe`  have been added.

All renamed colours should have their function calls updated to the new names.

# Spacing
The Standards Toolkit supplies pre-determined spacing values to maintain consistency across all our applications and to ensure the designs from the Sketch library correlate with our code output.

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

# Typography

- Makes the `base` scale position `0.875rem` (`14px` at body `font-size: 100%`). 
- Balances the scale so that it runs `xxs` through `xxl`, rather than `xxxs` through `xl`.

<div className="standard-table">

| Updated Scale  | Current Scale | Computed Value (rems) |
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


# Breakpoints
- Normalises Breakpoint scale so  `font-size: 100%`  has a value of `16px` at the `1200px - 1400px` breakpoint.
- Removes the `xxxl` breakpoint and adds in the `xs` breakpoint. This bumps all scale positions down a breakpoint.

<div className="standard-table">

| Breakpoint Scale  | Previous Font Size (%) | Updated Font Size (%) |
|-------------------|------------------------|-----------------------|
| `root`            | `100`                  | `92`                  |
| `xs`              | `-`                    | `94`                  |
| `s`               | `103`                  | `96`                  |
| `m`               | `106`                  | `98`                  |
| `l`               | `106`                  | `100`                 |
| `xl`              | `112`                  | `103`                 |
| `xxl`             | `115`                  | `106`                 |
| `xxxl`            | `118`                  | `-`                   |

</div>

You will need to update your `@include breakpoint()` mixins with the new, updated values.


# Helpers
- `helper` classes have been renamed to `utility`in v2. This is to better align the Standards Toolkit with the industry standard of “Utility classes”, which better describe their function, rather than “Helper classes”.
- Utility class namespace has been updated with `.rn_` to be more consistent with the `.rn-` component namespace.

All instances of the utility classes that use the old `.h_` syntax will need to be updated to `.rn_`. Alternatively, you can set the `$utility-ns` value back to `h_` when you initialise the project. See below for more details.

# Overriding the Toolkit

With the new module system, it is easier than ever to override values provided by the Standards Toolkit. When `@use`-ing the CSS Framework, you can assign the provided variables your own values to override any that exist in the Context. The variables that can be overridden are:

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
