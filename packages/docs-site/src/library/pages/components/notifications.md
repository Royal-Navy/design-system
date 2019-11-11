---
title: Notifications
description: A component to easily alert users to new notifications.
header: true
---

import { Icons, Sidebar, Tab, TabSet } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import SketchWidget from '../../../components/presenters/sketch-widget'
import NotificationComponent from '../../images/components/notifications/component.svg'
import NotificationAnatomy from '../../images/components/notifications/anatomy.svg'
import NotificationStates from '../../images/components/notifications/states.svg'

# Overview
The Notification Component provides an easy way to message the user when an action that is relevant to them happens within an application.

<NotificationComponent />

## Usage
Only one Notification component should be used per page. It should exist in a fixed location throughout the application, in either the Sidebar or the Masthead.

<TabSet>

<Tab title="Design">

<SketchWidget name="Notifications" href="/standards-toolkit.sketch" />

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

</Tab>


<Tab title="Develop">

### Basic Usage
<CodeHighlighter source={`<Notifications href="notifications">
  <Notification
    href="notifications/1"
    name="Thomas Stephens"
    action="added a new comment to your"
    on="review"
    when={new Date('2019-11-05T10:57:00.000Z')}
    description="A long description that will be shortened"
  />
  <Notification
    href="notifications/2"
    name="Thomas Stephens"
    action="added a new comment to your"
    on="review"
    when={new Date('2019-11-04T10:23:00.000Z')}
    description="A long description that will be shortened again"
  />
</Notifications>
`} language="javascript" />

### Notifications Properties
<DataTable data={[
  {
    Name: 'href',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'For linking to a list of all notifications.',
  },
  {
    Name: 'children',
    Type: 'React.ReactElement<NotificationProps>[]',
    Required: 'True',
    Default: '',
    Description: 'An array of notifications.',
  },
]} />

### Notification Properties
<DataTable data={[
  {
    Name: 'href',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'For linking to the notification.',
  },
  {
    Name: 'name',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'Name of the person who did the action.',
  },
  {
    Name: 'read',
    Type: 'boolean',
    Required: 'False',
    Default: 'False',
    Description: 'Shows the read indicator next to the notification. If the notification has been read then the value needs to be set to True.',
  },
  {
    Name: 'action',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'What the person specified with Name did.',
  },
  {
    Name: 'on',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'The object the person acted on.',
  },
  {
    Name: 'when',
    Type: 'Date',
    Required: 'True',
    Default: '',
    Description: 'Date that the action happened.',
  },
  {
    Name: 'description',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'More information about the notification which will be shortened.',
  },
]} />

</Tab>

</TabSet>
