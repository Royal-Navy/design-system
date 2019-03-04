---
title: Typography Helpers
description: CSS Framework provides helper classes to quickly set font size and text alignment.
audience: public
pageClasses: ''
context: 'CSS Framework Helpers'
template: withsidebar
usageExampleType: CSS
usageExample: '@import "~bedrock/bedrock";'
---

# Introduction

The CSS Framework's [Typography Variables](/design/typography) are available in Utility Class form, allowing the standard font sizes to be overridden. All helper classes are prefixed with the namespace `.h_`. This is to prevent them clashing with any custom styles you may author.

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
