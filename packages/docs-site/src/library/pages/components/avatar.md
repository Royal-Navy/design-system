---
title: Avatar
description: Avatars are simple UI elements that display a user's initials.
header: true
draft: false
---

import AvatarComponent from '../../images/components/avatar/Component'
import AvatarAnatomy from '../../images/components/avatar/Anatomy'
import AvatarStates from '../../images/components/avatar/States'

import Bucket from '../../../components/presenters/bucket'

<div className="bucket__container">
  <Bucket type="sketch" url="https://docs.royalnavy.io/design-system.sketch" />
  <Bucket type="storybook" url="https://storybook.royalnavy.io/?path=/docs/avatar--default" />
</div>

# Overview

Avatars are simple UI elements that display a user's initials.
<AvatarComponent />

## Usage

The Avatar component can either be displayed statically, or as a link. The Avatar can be used to provide navigation to a user's profile, or to associate a user with a particular set of data.

### Anatomy

<AvatarAnatomy />

1. **Container**. The Container wraps the component.
2. **Initials**. A user's initials are displayed in the centre of the component.


### Sizing & Spacing
The Avatar component is available in 1 standard size.

### States

<AvatarStates />

The Avatar has 2 states - default and hover.
