---
title: Avatar
description: Avatars are simple UI elements that display a user's initials.
header: true
---

import { Tab, TabSet } from '@royalnavy/react-component-library'
import SketchWidget from '../../../components/presenters/sketch-widget'

import AvatarComponent from '../../images/components/avatar/component.svg'
import AvatarAnatomy from '../../images/components/avatar/anatomy.svg'
import AvatarStates from '../../images/components/avatar/states.svg'

# Overiew

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
  2. **Initials**. A user's initals are displayed in the centre of the component.


  ### Sizing & Spacing
  The Avatar component is available in 1 standard size.

  ### States
  
  <AvatarStates />

  The Avatar has 2 states - default and hover.
  
</Tab>
<Tab title="Develop">

</Tab>
</TabSet>