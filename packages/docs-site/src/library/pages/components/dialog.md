---
title: Dialog
description: Dialog is a child window that overlays the main parent window.
header: true
---

import { Dialog, TabSet, Tab } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import SketchWidget from '../../../components/presenters/sketch-widget'

import DialogComponent from '../../images/components/dialog/component.svg'
import DialogAnatomy from '../../images/components/dialog/anatomy.svg'

# Overview

Dialog creates a new context that disables the main window but keeps it visible, with the modal window as a child window in front of it. Users must interact with the dialog window before they can return to the parent application. 

The Dialog component is a full screen component used to inform the user of a particular task. It can be used to simply pass important information or to ask for a decision from the user. For a more general purpose window to capture the user's focus, use the [Modal component](/components/modal) instead.

<DialogComponent />

## Usage
As the Dialog is displayed full screen, it focuses the user's attention and requires them to acknowledge the content inside the Dialog. This content can simply be to inform the user of important information or it can be to require a decision from the user. This is often used for a destructive action, such as when a user is permanently deleting data.

<TabSet>
<Tab title="Design">
<SketchWidget name="Dialog" href="/standards-toolkit.sketch" /> 

### Anatomy

<DialogAnatomy />

1. **Container**. This wraps the entire component, adding a z-index to ensure the Dialog stacks above the entire app. This Container also serves as a backdrop that covers the application with a dark, transparent background. This draws focus to the main Dialog Window.
2. **Dialog Window**. This is the main focus of the Dialog component. Add content here to inform the user or ask them to perform an action.
3. **Dialog Footer**. Provides a Primary or Danger button. Can also house an optional Cancel button.

### States
The Dialog component has two states - hidden and active. By default, including the dialog component in an application page won't render it. Triggering the component will cause it to fade in over all application content.


### Hierarchy & Placement
As the Dialog is a full-screen component, only one can be used at any time. The Dialog auto-positions itself to the centre of the screen and will adjust itself based on the content provided. There is no need to manually size or place the Dialog.


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