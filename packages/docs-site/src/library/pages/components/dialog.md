---
title: Dialog
description: Dialog is a child window that overlays the main parent window.
header: true
---

import { Dialog, TabSet, Tab } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import SketchWidget from '../../../components/presenters/sketch-widget'

# Overview

Dialog creates a new context that disables the main window but keeps it visible, with the modal window as a child window in front of it. Users must interact with the dialog window before they can return to the parent application. 

<TabSet>

<Tab title="Design">

<SketchWidget name="Dialog" href="/standards-toolkit.sketch" />

</Tab>

<Tab title="Develop">

Dialog is a child window that overlays the main parent window.

### Basic Usage
<CodeHighlighter className="code-highlighter--dialog" source={`<Dialog
  title="Dialog Title"
  description="Dialog description."
  onConfirm={event => {
    console.log('onConfirm')
  }}
  onCancel={event => {
    console.log('onCancel')
  }}
  isOpen
/>`} language="javascript">
  <Dialog
    className="docs-site-example-dialog"
    title="Dialog Title"
    description="Dialog description."
    onConfirm={event => {
      console.log('onConfirm')
    }}
    onCancel={event => {
      console.log('onCancel')
    }}
    isOpen
  />
</CodeHighlighter>

### Danger Usage
<CodeHighlighter className="code-highlighter--dialog" source={`<Dialog
  title="Dialog Title"
  description="Dialog description."
  onConfirm={event => {
    console.log('onConfirm')
  }}
  onCancel={event => {
    console.log('onCancel')
  }}
  danger
  isOpen
/>`} language="javascript">
  <Dialog
    className="docs-site-example-dialog"
    title="Dialog Title"
    description="Dialog description."
    onConfirm={event => {
      console.log('onConfirm')
    }}
    onCancel={event => {
      console.log('onCancel')
    }}
    danger
    isOpen
  />
</CodeHighlighter>

### Dialog Properties
<DataTable data={[
  {
    Name: 'className',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'Custom CSS class to add to the component',
  },
  {
    Name: 'title',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'The title to display at the top of the dialog',
  },
  {
    Name: 'description',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'The description text to display within the body of the dialog',
  },
  {
    Name: 'onConfirm',
    Type: 'Function<any>',
    Required: 'False',
    Default: '',
    Description: 'A callback function invoked when the dialog is confirmed',
  },
  {
    Name: 'onCancel',
    Type: 'Function<any>',
    Required: 'False',
    Default: '',
    Description: 'A callback function invoked when the dialog is cancelled',
  },
  {
    Name: 'danger',
    Type: 'boolean',
    Required: 'False',
    Default: '',
    Description: 'An attribute denoting that this a danger dialog',
  },
  {
    Name: 'isOpen',
    Type: 'boolean',
    Required: 'False',
    Default: '',
    Description: 'An attribute denoting the open / close state of the dialog',
  },
]} />

</Tab>
</TabSet>
