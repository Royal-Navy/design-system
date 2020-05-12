---
title: Modal
description: Modal is a child window that overlays the main parent window.
header: true
---

import { Modal, TabSet, Tab } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import SketchWidget from '../../../components/presenters/sketch-widget'

import ModalComponent from '../../images/components/modal/Component'
import ModalUsage from '../../images/components/modal/Usage'
import ModalAnatomy from '../../images/components/modal/Anatomy'

# Overview

Modal creates a new context that disables the main window but keeps it visible, with the modal window as a child window in front of it. Users must interact with the modal window before they can return to the parent application. 

<ModalComponent />

## Usage
The Modal should be used to control application flow for a user. By opening a modal window for the user, you can focus their attention to whatever you need them to action on. This could be anything from entering data to managing settings. If you require to explicitly message the user (either to confirm an action or present information that the user must acknowledge) then use the [Dialog component](/components/dialog) instead. Unlike the Dialog component, the Modal can be closed by clicking the cross situated in the header of the component.

<ModalUsage />

Modals can be combined with [Forms](/components/forms/) to create flows that capture the user's attention.

<TabSet>

<Tab title="Design">

<SketchWidget name="Modal" href="/design-system.sketch" />

### Anatomy

<ModalAnatomy />

1. **Container**. This wraps the entire component, adding a z-index to ensure the Modal stacks above the entire app. This Container also serves as a backdrop that covers the application with a dark, transparent background. This draws focus to the main Modal Window.
2. **Modal Window**. This is the main focus of the Modal component. Add content here to inform the user or ask them to perform an action.
3. **Modal header**. Provides a space for a Modal title and close button.
4. **Modal Footer**. Provides a Action or Danger button. Can also house an optional Cancel button.

### States
The Modal component has two states - `hidden` and `active`. By default, including the Modal component in an application page won't render it. Triggering the component will cause it to fade in, over all application content.

### Hierarchy & Placement
As the Modal is a full-screen component, only one can be used at any time. The Modal auto-positions itself to the centre of the screen and will adjust itself based on the content provided. There is no need to manually size or place the Modal.

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
    Name: 'children',
    Type: 'React.ReactNode',
    Required: 'False',
    Default: '',
    Description: 'Content of the modal',
  },
  {
    Name: 'isOpen',
    Type: 'boolean',
    Required: 'False',
    Default: '',
    Description: 'An attribute denoting the open / close state of the modal',
  },
  {
    Name: 'onClose',
    Type: 'Function<any>',
    Required: 'False',
    Default: '',
    Description: 'A callback function invoked when the modal is closed',
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
    Name: 'title',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'The title to display at the top of the modal',
  },
]} />

</Tab>
</TabSet>
