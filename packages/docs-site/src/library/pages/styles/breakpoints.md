---
title: Breakpoints
description: ''
tags: public
pageClass: ''
template: default
header: true
---

import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'

# Breakpoints

The **Standards Toolkit** provides default breakpoint sizes to use in your applications.

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

To use breakpoints inside your SCSS, the **Standards Toolkit** provides mixins to help:

<CodeHighlighter 
source={`@mixin breakpoint('s') {
  // Styles here
}
// Result
@media only screen and (min-width: 576px) {
  // Styles here
}`} language="css"
/>


# Utility classes

The **Toolkit** provides Breakpoints for each Utility class. Simply pre-pend a Utility class with a breakpoint size.

<CodeHighlighter 
source={`.md:rn_mt-4
.lg:rn_mt-10
`} language="css"
/>
