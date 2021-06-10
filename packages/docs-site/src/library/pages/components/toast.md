---
title: Toast
description: Toasts provide brief messages about application state.
header: true
---

import Bucket from '../../../components/presenters/bucket'
import ToastComponent from '../../images/components/toast/Component'
import ToastAnatomy from '../../images/components/toast/Anatomy'
import ToastStates from '../../images/components/toast/States'

<div className="bucket__container">
  <Bucket type="sketch" url="https://docs.royalnavy.io/design-system.sketch" />
  <Bucket type="storybook" url="https://storybook.royalnavy.io/?path=/docs/toast--default" />
</div>

# Overview
The Toast component provides a way to send notifications to the user.

<ToastComponent />

## Usage
Use Toasts to push messages to your users, based on actions they may perform.

### Anatomy

<ToastAnatomy />

1. **Label**. Text label to display at the top of the component
2. **Time**. Timestamp displaying when the Toast was triggered.
3. **Close button**. Dismisses the Toast.
4. **Description**. Accompanying text for additional context.

### Sizing & Spacing
The Toast is of a fixed width, but will resize vertically to fit multiple lines of text within it.

### Hierarchy & Placement
Toast components sit in the top right of the viewport. If multiple are triggered, they stack vertically.

### States

<ToastStates />

The Toast component has four available states: Default, Danger, Warning, and Success.
