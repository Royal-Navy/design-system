---
title: Typography
description: ''
tags: public
pageClass: ''
template: default
index: 2
---

All Standards Toolkit applications are set in [Lato](http://www.latofonts.com/). We also provide the System Font Stack as a fallback to Lato in case a system doesn't support it:

```
  system-ui,
  BlinkMacSystemFont,
  -apple-system,
  Segoe UI,
  Roboto,
  Oxygen,
  Ubuntu,
  Cantarell,
  Fira Sans,
  Droid Sans,
  Helvetica Neue,
  sans-serif;
```

## Typography Scale

Named Size | Computed Value
---------- | --------------
display-xl | 3rem
display-l  | 2.25rem
display    | 1.875rem
xl         | 1.5rem
l          | 1.25rem
m          | 1.125rem
base       | 1rem
s          | 0.875rem
xs         | 0.75rem
xxs        | 0.625rem
xxxs       | 0.5rem

## Using Fonts

To reference typography sizes within your styles, use the `font-size()` mixin. The mixin takes the Named Size string as a value, returning the correct `rem` value.

```
  @include font-size(base);

  // returns
  font-size: 1rem; 
```

# CSS Helpers
The CSS Framework's Typography variables are available in Utility Class form, allowing the standard font sizes to be overridden. All helper classes are prefixed with the namespace `.h_`. This is to prevent them clashing with any custom styles you may author.

The class syntax follows the following pattern:

```scss
  .h_[Property]-[Size]
```

Property     | Size
------------ | -----
`text-`      | `xs ` 0.75rem
&nbsp;       | `s` 0.875rem
&nbsp;       | `base` 1rem
&nbsp;       | `m` 1.125rem
&nbsp;       | `l` 1.25rem
&nbsp;       | `xl` 1.5rem
&nbsp;       | `display` 1.875rem
&nbsp;       | `display-l` 2.25rem
&nbsp;       | `display-xl` 3rem

For example, adding a class of `.h_text-xl` would result in the following:

```css
  margin-top: 1.5rem;
```

To use the helper classes in conjunction with [media queries](/styles/breakpoints), add the required breakpoint to the helper class:

```scss
  .md:h_text-xl
```