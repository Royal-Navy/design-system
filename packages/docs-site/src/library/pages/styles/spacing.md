---
title: Spacing
description: How we handle Spacing and sizing in the Standards Toolkit
tags: public
pageClass: ''
template: default
header: true
---

import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'

# Spacing

Spacing is a key (and often overlooked) aspect of ensuring your application is easy to read and understand. Too little whitespace will cause components to become visually cramped, therefore decreasing readability. The general rule is to start with whitespace that is too large for an element and then decrease it until it is at an appropriate size. It is far better to have too much whitespace than too little.

#### Dense UI

Sometimes interfaces (particularly dashboards or data heavy components) need to have a more condensed UI to ensure all information is presented to the user. This is a tradeoff with readability, so try to use this sparingly.

## The Spacing Scale

By reducing application Spacing to a predetermined scale, it is easy to ensure all elements and components are spaced in proportion to each other, rather than with arbitrary values.

The Spacing scale, much like the typography scale, doesn't increase in a linear fashion. This is because as elements get positioned further apart, the difference between adjacent values becomes less noticeable.

<DataTable data={[
  {
    Scale: '1',
    Size: '0.25rem'
  },
  {
    Scale: '2',
    Size: '0.5rem'
  },
  {
    Scale: '3',
    Size: '0.75rem'
  },
  {
    Scale: '4',
    Size: '1rem'
  },
  {
    Scale: '5',
    Size: '1.25rem'
  },
  {
    Scale: '6',
    Size: '1.5rem'
  },
  {
    Scale: '8',
    Size: '2rem'
  },
  {
    Scale: '10',
    Size: '2.5rem'
  },
  {
    Scale: '12',
    Size: '3rem'
  },
  {
    Scale: '16',
    Size: '4rem'
  },
  {
    Scale: '20',
    Size: '5rem'
  },
  {
    Scale: '24',
    Size: '6rem'
  },
  {
    Scale: '32',
    Size: '8rem'
  },
  {
    Scale: 'px',
    Size: '1px'
  },
  {
    Scale: 'full',
    Size: '100%'
  },
]} />

#### Using the Spacing Scale

To help use the Spacing scale, there is a handy SCSS function provided: `spacing()`. This function accepts one parameter, the Scale value:

<CodeHighlighter 
source={`padding: Spacing(4);
// Result
padding: 1rem;`} language="css"
/>

#### Helpers

The CSS Frameworks Spacing Variables are available in Utility Class form, allowing components to be quickly positioned and manipulated without having to jump into the CSS. All helper classes are prefixed with the namespace `.h_`. This is to prevent them clashing with any custom styles you author.

Both margin and padding can be set via helper classes. The class syntax follows this pattern:

<CodeHighlighter 
source={`.h_[Property][Direction?]-[Size]`} language="css"
/>

<div class="standard-table">

Property     | Direction  | Size
------------ | ---------- | -----------
`m` margin   | all        | `1` 0.25rem
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

</div>

For example, adding a class of `.h_mt-10` would result in the following:

<CodeHighlighter 
source={`margin-top: 2.5rem;`} language="css"
/>


To use the helper classes in conjunction with [media queries](/styles/breakpoints), add the required breakpoint to the helper class:

<CodeHighlighter 
source={`.md:h_mt-10`} language="css"
/>
