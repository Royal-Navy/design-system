---
title: Position Helpers
description: CSS Framework provides helper classes and mixins to help quickly position elements.
audience: public
pageClasses: ''
context: 'CSS Framework Helpers'
template: withsidebar
usageExampleType: CSS
usageExample: '@import "~bedrock/bedrock";'
---
# Introduction

The CSS Framework provides positional classes to quickly align your elements. All helper classes are prefixed with the namespace `.h_`. This is to prevent them clashing with any custom styles you may author.

The class syntax follows the following pattern:

```scss
  .h_[Property]
```

Property     |
------------ |
`static`     |
`relative`   | 
`absolute`   |
`fixed`      |
`sticky`     |


For example, adding a class of `.h_sticky` would result in the following:


```css
  position: sticky;
```
