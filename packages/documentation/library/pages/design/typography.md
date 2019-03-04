---
title: Typography
audience: public
pageClasses: ''
context: 'Design'
template: withsidebar
---

All NELSON applications are set in [Lato](http://www.latofonts.com/). We also provide the System Font Stack as a fallback to Lato in case a system doesn't support it:

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
