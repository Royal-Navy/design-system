---
title: Button Group
description: A collection of buttons commonly used to select an option
header: true
---

import ButtonGroupComponent from '../../images/components/button-group/Component'
import ButtonGroupAnatomy from '../../images/components/button-group/Anatomy'

import Bucket from '../../../components/presenters/bucket'

<div className="bucket__container">
  <Bucket type="sketch" url="https://docs.royalnavy.io/design-system.sketch" />
  <Bucket type="storybook" url="https://storybook.royalnavy.io/?path=/docs/ button-group--default" />
</div>

# Overview

A Button group is a useful component for grouping together buttons to allow a user to select an option.

<ButtonGroupComponent />

## Usage
The Button Group acts as a wrapper for multiple buttons. It removes the spacing and border radius between adjacent buttons, making them sit flush next to each other. It is used to indicate a relationship between similar actions - pagination and toolbars are great examples of this.

### Anatomy
The Button Group by itself doesn't have any visual elements. The Group simply removes the spacing between buttons and makes them sit flush beside each other.

<ButtonGroupAnatomy />

1. **Container** - wraps the component and removes border-radius and spacing between buttons.
2. **Buttons** - the Button Components added to the Group.

### Sizing & Spacing
The Button Group should always use the same size Button components. This allows the buttons to be positioned flush against each other. The Buttons themselves though can be any of the [available sizes](/components/buttons) outlined on the Button Docs page.

### Hierarchy & Placement
The Button Group is used to collate similar actions together under one consistent grouping. It should only feature Secondary Buttons, as Primary Buttons should be standalone actions.
