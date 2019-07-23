---
title: Breakpoints
description: ''
tags: public
pageClass: ''
template: default
---

import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'

# Breakpoints

The Standards Toolkit provides default breakpoint sizes to use in your applications.

<DataTable data={[
  {
    Size: 'root',
    Breakpoint: '0'
  },
  {
    Size: 's',
    Breakpoint: '576px'
  },
  {
    Size: 'm',
    Breakpoint: '768px'
  },
  {
    Size: 'l',
    Breakpoint: '1024px'
  },
  {
    Size: 'xl',
    Breakpoint: '1200px'
  },
  {
    Size: 'xxl',
    Breakpoint: '1400px'
  },
  {
    Size: 'xxxl',
    Breakpoint: '1600px'
  }
]} />

# Using Breakpoints

The Standards Toolkit has two methods available for using the default breakpoints in your application.

## Inside your SCSS

To use breakpoints inside your CSS, the Standards Toolkit provides mixins to help:

<CodeHighlighter 
source={`@mixin breakpoint('s') {
  // Styles here
}
// Result
@media only screen and (min-width: 576px) {
  // Styles here
}`} language="scss"
/>


# Helper Classes

Breakpoints are also available for each helper class the toolkit provides. Simple prepend a helper class with the breakpoint size you require to use them:

<CodeHighlighter 
source={`.md:h_mt-4
.lg:h-mt-10
`} language="scss"
/>
