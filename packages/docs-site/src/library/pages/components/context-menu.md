---
title: Context Menu
description: A menu that appears upon user interaction, such as right-click mouse operation.
header: true
---

import ContextMenuComponent from '../../images/components/context-menu/Component'
import ContextMenuAnatomy from '../../images/components/context-menu/Anatomy'

import Bucket from '../../../components/presenters/bucket'

<div className="bucket__container">
  <Bucket type="sketch" url="https://docs.royalnavy.io/design-system.sketch" />
  <Bucket type="storybook" url="https://storybook.royalnavy.io/?path=/docs/context-menu--default" />
</div>

# Overview
A menu that appears upon user interaction, such as right-click mouse operation.

<ContextMenuComponent />

## Usage
The Context Menu provides a way to add additional functionality to a component or application. You should only use the Context Menu for supplementary actions, as it is hidden by default.

### Anatomy

<ContextMenuAnatomy />

1. **Container**. Wraps the entire component.
1. **Menu Item**. A single menu action.


### Sizing & Spacing
The Context Menu is of a fixed width, so you should keep your menu item names short. We recommend using iconography to supplement a menu item.


### Hierarchy & Placement
The Context Menu can be triggered anywhere in your application. Ensure the actions in the menu apply to the object or component that has triggered it. Only one Context Menu should be visible at any time.
