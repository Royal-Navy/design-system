---
title: Avatar
description: Avatars are simple UI elements that display a user's initials.
header: true
draft: false
---

import { Avatar, AVATAR_VARIANT, Tab, TabSet } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import SketchWidget from '../../../components/presenters/sketch-widget'

import AvatarComponent from '../../images/components/avatar/Component'
import AvatarAnatomy from '../../images/components/avatar/Anatomy'
import AvatarStates from '../../images/components/avatar/States'

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

<CodeHighlighter source={`<Avatar initials="RT" variant={AVATAR_VARIANT.DARK} />
<Avatar initials="ST" variant={AVATAR_VARIANT.LIGHT} />
`} language="javascript">
  <div style={{ background: '#A0A0A0', padding: 20 }}>
    <p><Avatar initials="RT" variant={AVATAR_VARIANT.DARK} />&nbsp;<Avatar initials="ST" variant={AVATAR_VARIANT.LIGHT}/></p>
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
    Name: 'initials',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'The users initials, a maximum of 2 letters',
  },
  {
    Name: 'variant',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'Variant of the avatar, can be `dark` or `light`.',
  },
]} />
</Tab>
</TabSet>
