---
title: Spacing
description: How we handle Spacing and sizing in the Royal Navy Design System
tags: public
pageClass: ''
template: default
header: true
---

import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'

# Spacing

Spacing is a key (and often overlooked) aspect of ensuring your application is easy to read and understand. Too little whitespace will cause components to become visually cramped, therefore decreasing readability. The general rule is to start with whitespace that is too large for an element and then decrease it until it is at an appropriate size. It is far better to have too much whitespace than too little.

#### Dense User Interfaces

Sometimes interfaces (particularly dashboards or data heavy components) need to have a more condensed UI to ensure all information is presented to the user. This is a tradeoff with readability, so try to use this sparingly.

## The Spacing Scale

By reducing application Spacing to a predetermined scale, it is easy to ensure all elements and components are spaced in proportion to each other, rather than with arbitrary values.

The Spacing Scale values, much like the Typography Scale values, doesn't increase in a linear fashion. This is because as elements get positioned further apart, the difference between adjacent values becomes less noticeable. Whilst the Scale values itself increases non-linearly, the Scale is linear. This is to help developers quickly adjust spacing, without having to worry about the underlying Spacing API values.

<DataTable data={[
  {
    Scale: '1',
    Size: '0.125rem',
    PX: '2px'
  },
  {
    Scale: '2',
    Size: '0.25rem',
    PX: '4px'
  },
  {
    Scale: '3',
    Size: '0.375rem',
    PX: '6px'
  },
  {
    Scale: '4',
    Size: '0.5rem',
    PX: '8px'
  },
  {
    Scale: '5',
    Size: '0.625rem',
    PX: '10px'
  },
  {
    Scale: '6',
    Size: '1.75rem',
    PX: '12px'
  },
  {
    Scale: '7',
    Size: '0.875rem',
    PX: '14px'
  },
  {
    Scale: '8',
    Size: '1rem',
    PX: '16px'
  },
  {
    Scale: '9',
    Size: '1.125rem',
    PX: '18px'
  },
  {
    Scale: '10',
    Size: '1.25rem',
    PX: '20px'
  },
  {
    Scale: '11',
    Size: '1.5rem',
    PX: '24px'
  },
  {
    Scale: '12',
    Size: '2rem',
    PX: '32px'
  },
  {
    Scale: '13',
    Size: '2.5rem',
    PX: '40px'
  },
  {
    Scale: '14',
    Size: '3rem',
    PX: '48px'
  },
  {
    Scale: '15',
    Size: '4rem',
    PX: '64px'
  },
  {
    Scale: '16',
    Size: '5rem',
    PX: '80px'
  },
  {
    Scale: '17',
    Size: '6rem',
    PX: '96px'
  },
  {
    Scale: '18',
    Size: '8rem',
    PX: '128px'
  },
  {
    Scale: '19',
    Size: '9rem',
    PX: '144px'
  },
  {
    Scale: '20',
    Size: '10rem',
    PX: '160px'
  },
  {
    Scale: 'px',
    Size: '1px',
    PX: '-'
  },
  {
    Scale: 'full',
    Size: '100%',
    PX: '-'
  },
]} />

#### Using the Spacing Scale

To help use the Spacing scale, there is a handy SCSS function provided: `spacing()`. This function accepts one parameter, the Scale value:

<CodeHighlighter 
source={`padding: spacing("4");
// Result
padding: 0.5rem;`} language="css"
/>

#### Utility Classes

The CSS Frameworks Spacing Variables are available in Utility Class form, allowing components to be quickly positioned and manipulated without having to jump into the CSS. All Utility classes are prefixed with the namespace `.rn_`. This is to prevent them clashing with any custom styles you author.

Both margin and padding can be set via Utility classes. The class syntax follows this pattern:

<CodeHighlighter 
source={`.rn_[Property][Direction?]-[Size]`} language="css"
/>

<div class="standard-table">

Property     | Direction  | Size
------------ | ---------- | -----------
`m` margin   | all        | `1` 0.125rem
`p` padding  | `t` top    | `2` 0.25rem
&nbsp;       | `r` right  | `3` 0.375rem
&nbsp;       | `b` bottom | `4` 0.5rem
&nbsp;       | `l` left   | `5` 0.625rem
&nbsp;       | `x` x-axis | `6` 0.75rem
&nbsp;       | `y` y-axis | `7` 0.875rem
&nbsp;       |            | `8` 1rem
&nbsp;       |            | `9` 1.125rem
&nbsp;       |            | `10` 1.25rem
&nbsp;       |            | `11` 1.5rem
&nbsp;       |            | `12` 2rem
&nbsp;       |            | `13` 2.5rem
&nbsp;       |            | `14` 3rem
&nbsp;       |            | `15` 4rem
&nbsp;       |            | `16` 5rem
&nbsp;       |            | `17` 6rem
&nbsp;       |            | `18` 7rem
&nbsp;       |            | `19` 8rem
&nbsp;       |            | `20` 9rem
&nbsp;       |            | `px` 1px
&nbsp;       |            | `full` 100%

</div>

For example, adding a class of `.rn_mt-10` would result in the following:

<CodeHighlighter 
source={`margin-top: 1.25rem;`} language="css"
/>


To use the Utility classes in conjunction with [media queries](/styles/breakpoints), add the required breakpoint to the Utility class:

<CodeHighlighter 
source={`.md:rn_mt-10`} language="css"
/>
