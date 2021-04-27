---
title: Drawer
description: Drawer is a simple panel that can be triggered to appear on the right hand side of the screen.
header: true
---

import DrawerComponent from '../../images/components/drawer/Component'
import DrawerAnatomy from '../../images/components/drawer/Anatomy'

import Bucket from '../../../components/presenters/bucket'

<div className="bucket__container">
  <Bucket type="sketch" url="https://docs.royalnavy.io/design-system.sketch" />
  <Bucket type="storybook" url="https://storybook.royalnavy.io/?path=/docs/drawer--default" />
</div>

# Overview

Drawer is a simple panel that can be triggered to appear on the right hand side of the screen.

<DrawerComponent />

## Usage

The Drawer is used to show more details for a specific item in a list or table. It provides an inline way to view more comprehensive information about the item, including space for forms and images.
  
### Anatomy

<DrawerAnatomy />

1. **Sheet**. Much like the Card component, the Drawer Sheet is a blank canvas to add components to.
2. **Close Button**. The Close Button triggers the hiding animation, causing the Drawer to slide out to the right of the viewport.

### States
The Drawer has two states - hidden and visible. By default, the Drawer is hidden off the right hand side of the screen. Clicking on an item that triggers the Drawer will cause the drawer to slide in from the edge of the screen.

Clicking the Close button will reverse this animation.
