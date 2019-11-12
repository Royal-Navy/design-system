---
title: Avatar
description: Avatars are simple UI elements that display a user's initials.
header: true
draft: false
---

import { Avatar, Tab, TabSet } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import SketchWidget from '../../../components/presenters/sketch-widget'

import AvatarComponent from '../../images/components/avatar/component.svg'
import AvatarAnatomy from '../../images/components/avatar/anatomy.svg'
import AvatarStates from '../../images/components/avatar/states.svg'

# Overview

Avatars are simple UI elements that display a user's initials.
<AvatarComponent />

## Usage

The Avatar component can either be displayed statically, or as a link. The Avatar can be used to provide navigation to a user's profile, or to associate a user with a particular set of data.

<TabSet>
<Tab title="Design">

  <SketchWidget name="Avatar" href="/standards-toolkit.sketch" />

  ### Anatomy

  <AvatarAnatomy />

  1. **Container**. The Container wraps the component.
  2. **Initials**. A user's initials are displayed in the centre of the component.


  ### Sizing & Spacing
  The Avatar component is available in 1 standard size.

  ### States
  
  <AvatarStates />

  The Avatar has 2 states - default and hover.
  
</Tab>
<Tab title="Develop">
The Avatar component is a simple component that displays the users initials within a circle, with a hover state associated with it.

### Basic Usage

<CodeHighlighter source={`
<Avatar light initials="RT"/>
<Avatar dark initials="ST"/>
`} language="javascript">
  <div style={{ background: '#A0A0A0', padding: 20 }}>
    <p><Avatar light initials="RT"/>&nbsp;<Avatar dark initials="ST"/></p>
  </div>
</CodeHighlighter>


### Avatar Properties
<DataTable data={[
  {
    Name: 'className',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'Custom css class to add to the Avatar element',
  },
  {
    Name: 'dark',
    Type: 'boolean',
    Required: 'False',
    Default: '',
    Description: 'Use the dark style of avatar',
  },
  {
    Name: 'initials',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'The users initials, a maximum of 2 letters',
  },
  {
    Name: 'light',
    Type: 'boolean',
    Required: 'False',
    Default: '',
    Description: 'Use the light style of avatar',
  },
]} />
</Tab>
</TabSet>
