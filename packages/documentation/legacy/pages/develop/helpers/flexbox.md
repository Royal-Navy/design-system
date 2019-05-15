---
title: Flexbox Helpers
description: CSS Framework provides flexbox helper classes to aid with structuring your application.
audience: public
pageClasses: ''
context: 'CSS Framework Helpers'
template: withsidebar
usageExampleType: CSS
usageExample: '@import "~bedrock/bedrock";'
---

# Introduction

The CSS Framework provides flexbox classes to quickly align your elements. All helper classes are prefixed with the namespace `.h_`. This is to prevent them clashing with any custom styles you may author.


### Generic Flexbox Helpers

The class syntax follows the following pattern:

```scss
  .h_[Property]
```

Property     | Value
------------ | --------
`f`          | `display: flex;`
`f-1`        | `flex: 1`

For example, adding a class of `.h_f` would result in the following:

```css
  display: flex;
```

### Direction

The class syntax follows the following pattern:

```scss
  .h_[Property]
```

Namespace    | Property  | Reverse?
------------ | --------- | ---------
`f`          | `row`     | `reverse`
&nbsp;       | `col`     |

For example, adding a class of `.h_h-row-reverse` would result in the following:


```css
  flex-direction: row-reverse;
```

### Alignment

The class syntax follows the following pattern:


```scss
  .h_[Namespace]-[Property]-[Alignment]
```

Namespace    | Property  | Alignment
------------ | --------- | ---------
`f`          | `align`   | `stretch`
&nbsp;       | `justify` | `start`
&nbsp;       |           | `center`
&nbsp;       |           | `end`

For example, adding a class of `.h_f-align-end` would result in the following:

```css
  align-items: flex-end;
```
