---
title: Spacing Helpers
description: CSS Framework is a Utility CSS Framework that provides a consistent foundation for NELSON applications.
audience: public
pageClasses: ''
context: 'CSS Framework Helpers'
template: withsidebar
usageExampleType: CSS
usageExample: '@import "~bedrock/bedrock";'
---


# Introduction

The CSS Frameworks [Spacing Variables](/design/spacing) are available in Utility Class form, allowing components to be quickly positioned and manipulated without having to jump into the CSS. All helper classes are prefixed with the namespace `.h_`. This is to prevent them clashing with any custom styles you may author.

Both margin and padding can be set via helper classes. The class syntax follows the following pattern:

```scss
  .h_[Property][Direction?]-[Size]
```

Property     | Direction  | Size
------------ | ---------- | -----------
`m` margin   | ` ` all    | `1` 0.25rem
`p` padding  | `t` top    | `2` 0.5rem
&nbsp;       | `r` right  | `3` 0.75rem
&nbsp;       | `b` bottom | `4` 1rem
&nbsp;       | `l` left   | `5` 1.25rem
&nbsp;       | `x` x-axis | `6` 1.5rem
&nbsp;       | `y` y-axis | `8` 2rem
&nbsp;       |            | `10` 2.5rem
&nbsp;       |            | `12` 3rem
&nbsp;       |            | `16` 4rem
&nbsp;       |            | `20` 5rem
&nbsp;       |            | `24` 6rem
&nbsp;       |            | `32` 8rem
&nbsp;       |            | `px` 1px
&nbsp;       |            | `full` 100%

For example, adding a class of `.h_mt-10` would result in the following:


```css
  margin-top: 2.5rem;
```
