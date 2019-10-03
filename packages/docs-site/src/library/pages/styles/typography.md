---
title: Typography
description: ''
tags: public
pageClass: ''
template: default
header: true
---

import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'

All Standards Toolkit applications are set in [Lato](http://www.latofonts.com/). We also provide the System Font Stack as a fallback to Lato in case a system doesn't support it:

<CodeHighlighter 
source={`system-ui,
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
sans-serif;`} language="css"
/>

## Typography Scale


<DataTable data={[
  {
    Size: 'display-xl',
    'Value': '3rem'
  },
  {
    Size: 'display-l',
    'Value': '2.25rem'
  },
  {
    Size: 'display',
    'Value': '1.875rem'
  },
  {
    Size: 'xl',
    'Value': '1.5rem'
  },
  {
    Size: 'l',
    'Value': '1.25rem'
  },
  {
    Size: 'm',
    'Value': '1.125rem'
  },
  {
    Size: 'base',
    'Value': '1rem'
  },
  {
    Size: 's',
    'Value': '0.875rem'
  },
  {
    Size: 'xs',
    'Value': '0.75rem'
  },
  {
    Size: 'xxs',
    'Value': '0.625rem'
  },
  {
    Size: 'xxxs',
    'Value': '0.5rem'
  }
]} />

## Using Fonts

To reference typography sizes within your styles, use the `font-size()` mixin. The mixin takes the Named Size string as a value, returning the correct `rem` value.


<CodeHighlighter 
source={`@include font-size(base);
// returns
font-size: 1rem;`} language="css"
/>


# CSS Helpers
The CSS Framework's Typography variables are available in Utility Class form, allowing the standard font sizes to be overridden. All helper classes are prefixed with the namespace `.h_`. This is to prevent them clashing with any custom styles you author.

The class syntax follows this pattern:

<CodeHighlighter 
source={`.h_[Property]-[Size]`} language="css"
/>

<DataTable className="h_mt-4" data={[
  {
    Property: 'text-',
    Size: 'xs',
    Value: '0.75rem'
  },
  {
    Property: '',
    Size: 's',
    Value: '0.875rem'
  },
  {
    Property: '',
    Size: 'base',
    Value: '1rem',
  },
  {
    Property: '',
    Size: 'm',
    Value: '1.125rem'
  },
  {
    Property: '',
    Size: 'l',
    Value: '1.25rem'
  },
  {
    Property: '',
    Size: 'xl',
    Value: '1.5rem'
  },
  {
    Property: '',
    Size: 'display',
    Value: '1.875rem'
  },
  {
    Property: '',
    Size: 'display-l',
    Value: '2.25rem'
  },
  {
    Property: '',
    Size: 'display-xl',
    Value: '3rem'
  }
]} />

For example, adding a class of `.h_text-xl` would result in the following:

<CodeHighlighter 
source={`margin-top: 1.5rem;`} language="css"
/>

To use the helper classes with [media queries](/styles/breakpoints), add the required breakpoint it:

<CodeHighlighter 
source={`.md:h_text-xl`} language="css"
/>


<DataTable className="h_mt-4" data={[
  {
    Property: 'text-',
    Size: 'xs',
    Value: '0.75rem'
  },
  {
    Property: '',
    Size: 's',
    Value: '0.875rem'
  },
  {
    Property: '',
    Size: 'base',
    Value: '1rem',
  },
  {
    Property: '',
    Size: 'm',
    Value: '1.125rem'
  },
  {
    Property: '',
    Size: 'l',
    Value: '1.25rem'
  },
  {
    Property: '',
    Size: 'xl',
    Value: '1.5rem'
  },
  {
    Property: '',
    Size: 'display',
    Value: '1.875rem'
  },
  {
    Property: '',
    Size: 'display-l',
    Value: '2.25rem'
  },
  {
    Property: '',
    Size: 'display-xl',
    Value: '3rem'
  }
]} />
