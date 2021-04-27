---
title: Modal
description: Modal is a child window that overlays the main parent window.
header: true
---

import ModalComponent from '../../images/components/modal/Component'
import ModalUsage from '../../images/components/modal/Usage'
import ModalAnatomy from '../../images/components/modal/Anatomy'

import Bucket from '../../../components/presenters/bucket'

<div className="bucket__container">
  <Bucket type="sketch" url="https://docs.royalnavy.io/design-system.sketch" />
  <Bucket type="storybook" url="https://storybook.royalnavy.io/?path=/docs/modal--default" />
</div>

# Overview

Modal creates a new context that disables the main window but keeps it visible, with the modal window as a child window in front of it. Users must interact with the modal window before they can return to the parent application. 

<ModalComponent />

## Usage
The Modal should be used to control application flow for a user. By opening a modal window for the user, you can focus their attention to whatever you need them to action on. This could be anything from entering data to managing settings. If you require to explicitly message the user (either to confirm an action or present information that the user must acknowledge) then use the [Dialog component](/components/dialog) instead. Unlike the Dialog component, the Modal can be closed by clicking the cross situated in the header of the component.

<ModalUsage />

Modals can be combined with [Forms](/components/forms/) to create flows that capture the user's attention.

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
