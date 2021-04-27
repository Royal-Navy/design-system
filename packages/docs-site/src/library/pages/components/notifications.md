---
title: Notifications
description: A component to easily alert users to new notifications.
header: true
---

import NotificationComponent from '../../images/components/notifications/Component'
import NotificationAnatomy from '../../images/components/notifications/Anatomy'
import NotificationStates from '../../images/components/notifications/States'

import Bucket from '../../../components/presenters/bucket'

<div className="bucket__container">
  <Bucket type="sketch" url="https://docs.royalnavy.io/design-system.sketch" />
  <Bucket type="storybook" url="https://storybook.royalnavy.io/?path=/docs/masthead--default" />
</div>

# Overview
The Notification Component provides an easy way to message the user when an action that is relevant to them happens within an application.

<NotificationComponent />

## Usage
Only one Notification component should be used per page. It should exist in a fixed location throughout the application, in either the Sidebar or the Masthead.

### Anatomy

<NotificationAnatomy />

The Notification component has two main sections - the Trigger and the main Notification Sheet.

1. **Container**. The container wraps the entire notification sheet. By default it is hidden.
2. **Trigger**. The Trigger is the only part of the Notification Component that is visible by default. Clicking on it will trigger the Notification Sheet.
3. **Notifications**. Each Notification provides an overview of the action involving the user.
4. **All Notifications**. This link will navigate the user to a Notification screen.

### Sizing & Spacing
The Notification is only available in 1 size. It is tied into the Masthead and the Sidebar, so cannot be used independently of these components.

### States

<NotificationStates />

The Notification Component has two states: hidden and visible. By default, the Notification Sheet is hidden - clicking on the Trigger will make the sheet appear besides the bell icon.

### Hierarchy & Placement
The Notification Sheet should only be used in the Sidebar or Masthead.
