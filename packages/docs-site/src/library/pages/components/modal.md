---
title: Modal
description: Modal is a child window that overlays the main parent window.
header: true
---

import { Modal, TabSet, Tab } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import SketchWidget from '../../../components/presenters/sketch-widget'

# Overview

Modal creates a new context that disables the main window but keeps it visible, with the modal window as a child window in front of it. Users must interact with the modal window before they can return to the parent application. 

<TabSet>

<Tab title="Design">

<SketchWidget name="Modal" href="/standards-toolkit.sketch" />

</Tab>

<Tab title="Develop">

Modal is a child window that overlays the main parent window.

### Basic Usage
<CodeHighlighter className="code-highlighter--modal" source={`<Modal
  title="Modal Header"
  primaryButton={primaryButton}
  secondaryButton={secondaryButton}
  tertiaryButton={tertiaryButton}
  onClose={() => console.log('close')}
  isOpen
>
  This is an example modal.
</Modal>`} language="javascript">
  <Modal
    className="docs-site-example-modal"
    title="Modal Header"
    primaryButton={{
  onClick: event => console.log('Next'),
  children: 'Next',
}}
    secondaryButton={{
  onClick: event => console.log('Cancel'),
  children: 'Cancel',
}}
    tertiaryButton={{
  onClick: event => console.log('Back'),
  children: 'Back',
}}
    onClose={() => console.log('onClose')}
    isOpen
  >
    <div style={{ padding: '1rem' }}>This is an example Modal.</div>
  </Modal>
</CodeHighlighter>

### Modal Properties
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
    Description: 'The title to display at the top of the modal',
  },
  {
    Name: 'primaryButton',
    Type: 'ButtonProps',
    Required: 'False',
    Default: '',
    Description: 'A collection of props specifying the look and behaviour of the primary button',
  },
  {
    Name: 'secondaryButton',
    Type: 'ButtonProps',
    Required: 'False',
    Default: '',
    Description: 'A collection of props specifying the look and behaviour of the secondary button',
  },
  {
    Name: 'tertiaryButton',
    Type: 'ButtonProps',
    Required: 'False',
    Default: '',
    Description: 'A collection of props specifying the look and behaviour of the tertiary button',
  },
  {
    Name: 'onClose',
    Type: 'Function<any>',
    Required: 'False',
    Default: '',
    Description: 'A callback function invoked when the modal is closed',
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
