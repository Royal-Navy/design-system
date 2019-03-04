---
title: Spacing
audience: public
pageClasses: ''
context: 'Design'
template: withsidebar
---

Spacing is a key (and often overlooked) aspect of ensuring your application is easy to read and understand. Too little whitespace will cause components to become visually cramped, decreasing readability. The general rule is to start with whitespace that is too large for an element, and then decrease it until it is at an appropriate size. It is far better to have too much whitespace than too little.

#### Dense UI

Sometimes interfaces (particularly dashboards, or data heavy components) need to have a more condensed UI to ensure all information is presented to the user. This is a tradeoff with readability, so try to use this sparingly.

## The Spacing Scale

By reducing application spacing to a predetermined scale, it is easy to ensure all elements & components are spaced in proportion to each other, rather than with arbitary values.

The spacing scale, much like the typography scale, doesn't increase in a linear fashion. This is because as elements get positioned further apart, the difference between adjacent values would become less noticable.

Scale     | Size
--------- | -----------
`1`       | 0.25rem
`2`       | 0.5rem
`3`       | 0.75rem
`4`       | 1rem
`5`       | 1.25rem
`6`       | 1.5rem
`8`       | 2rem
`10`      | 2.5rem
`12`      | 3rem
`16`      | 4rem
`20`      | 5rem
`24`      | 6rem
`32`      | 8rem
`px`      | 1px
`full`    | 100%

#### Using the Spacing Scale

To help use the spacing scale, there is a handy SCSS function provided: `spacing()`. This function accepts one parameter, the Scale value:

```scss
  padding: spacing(4);

  // Result
  padding: 1rem;
```


#### Helper Classes

Helper classes have been provided with the above values, including directional classes to help quickly style your components. A full reference can be [found here](/develop/helpers/spacing).