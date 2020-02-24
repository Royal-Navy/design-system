---
title: Toast
description: Toasts provide brief messages about application state.
header: true
---

import { TabSet, Tab } from '@royalnavy/react-component-library'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import DataTable from '../../../components/presenters/data-table'

# Overview
Toasts overlay the application screen and sit fixed relative to the viewport.

## Usage
By default, a Toast will remain visible until dismissed. The user can dismiss it by tapping/clicking anywhere outside of it.

<TabSet>
<Tab title="Design">

</Tab>

<Tab title="Develop">

### Basic Usage
Wrap your app in the `ToastProvider`, which provides context for the `Toast` descendants.

<CodeHighlighter 
source={`i${''}mport { ToastProvider, useToasts } from '@royalnavy/react-component-library'
\nconst FormWithToasts = () => {
  const { addToast } = useToasts()
\n  const onSubmit = async value => {
    const { error } = await dataPersistenceLayer(value)
\n    if (error) {
      addToast(error.message, { appearance: 'error' })
    } else {
      addToast('Saved Successfully', { appearance: 'success' })
    }
  }
\n  return <form onSubmit={onSubmit}>...</form>
}
\nconst App = () => (
  <ToastProvider>
    <FormWithToasts />
  </ToastProvider>
)`}
language="javascript"
/>

### Hook
The `useToast` hook has the following signature:

<CodeHighlighter 
source={`const { 
  addToast, 
  removeToast, 
  removeAllToasts, 
  updateToast, 
  toastStack 
} = useToasts()`}
language="javascript"
/>

The `addToast` method has three arguments:

1.  The first is the content of the toast, which can be any renderable `Node`.
1.  The second is the `Options` object, which can take any shape you like. `Options.appearance` is required when using the `DefaultToast`. When departing from the default shape, you must provide an alternative, compliant `Toast` component.
1.  The third is an optional callback, which is passed the added toast `ID`.

The `removeToast` method has two arguments:

1.  The first is the `ID` of the toast to remove.
1.  The second is an optional callback.

The `removeAllToasts` method has no arguments.

The `updateToast` method has three arguments:

1.  The first is the `ID` of the toast to update.
1.  The second is the `Options` object, which differs slightly from the add method because it accepts a `content` property.
1.  The third is an optional callback, which is passed the updated toast `ID`.

The `toastStack` is an array of objects representing the current toasts, e.g.

<CodeHighlighter 
source={`[
  { content: 'Something went wrong', id: 'generated-string', appearance: 'error' },
  { content: 'Item saved', id: 'generated-string', appearance: 'success' }
]`}
language="javascript"
/>

### ToastProvider Props
<DataTable data={[
  {
    Name: 'children',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'Main content displayed by the toast.',
  },
  {
    Name: 'autoDismissTimeout',
    Type: 'number',
    Required: 'False',
    Default: 5000,
    Description: 'The time until a toast will be dismissed automatically, in milliseconds.',
  },
  {
    Name: 'placement',
    Type: 'PlacementType',
    Required: 'False',
    Default: 'top-right',
    Description: 'Where, in relation to the viewport, to place the toasts.',
  },
  {
    Name: 'transitionDuration',
    Type: 'number',
    Required: 'False',
    Default: 220,
    Description: 'The duration of the CSS transition on the Toast component.',
  }
]} />

</Tab>
</TabSet>
