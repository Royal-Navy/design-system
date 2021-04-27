---
title: Dialog
description: Dialog is a child window that overlays the main parent window.
header: true
---

import DialogComponent from '../../images/components/dialog/Component'
import DialogAnatomy from '../../images/components/dialog/Anatomy'

import Bucket from '../../../components/presenters/bucket'

<div className="bucket__container">
  <Bucket type="sketch" url="https://docs.royalnavy.io/design-system.sketch" />
  <Bucket type="storybook" url="https://storybook.royalnavy.io/?path=/docs/dialog--default" />
</div>

# Overview

Dialog creates a new context that disables the main window but keeps it visible, with the modal window as a child window in front of it. Users must interact with the dialog window before they can return to the parent application. 

The Dialog component is a full screen component used to inform the user of a particular task. It can be used to simply pass on important information or to ask for a decision from the user. For a more general purpose window to capture the user's focus, use the [Modal component](/components/modal) instead.

<DialogComponent />

## Usage
As the Dialog is displayed full screen, it focuses the user's attention and requires them to acknowledge the content inside the Dialog. This content can simply be to inform the user of important information or it can be to require a decision from the user. This is often used for a destructive action, such as when a user is permanently deleting data.

### Anatomy

<DialogAnatomy />

1. **Container**. This wraps the entire component, adding a z-index to ensure the Dialog stacks above the entire app. This Container also serves as a backdrop that covers the application with a dark, transparent background. This draws focus to the main Dialog Window.
2. **Dialog Window**. This is the main focus of the Dialog component. Add content here to inform the user or ask them to perform an action.
3. **Dialog Footer**. Provides a Action or Danger button. Can also house an optional Cancel button.

### States
The Dialog component has two states - `hidden` and `active`. By default, including the dialog component in an application page won't render it. Triggering the component will cause it to fade in, over all application content.


### Hierarchy & Placement
As the Dialog is a full-screen component, only one can be used at any time. The Dialog auto-positions itself to the centre of the screen and will adjust itself based on the content provided. There is no need to manually size or place the Dialog.
