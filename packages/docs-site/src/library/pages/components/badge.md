---
title: Badge
description: Badges are one of the foundational elements of any application.
header: true
---

import BadgeComponent from '../../images/components/badge/Component'
import BadgeAnatomy from '../../images/components/badge/Anatomy'
import BadgeSizes from '../../images/components/badge/Sizes'
import BadgeStates from '../../images/components/badge/States'
import Pill from '../../images/components/badge/Pill'
import PillStates from '../../images/components/badge/PillStates'

import Bucket from '../../../components/presenters/bucket'

<div className="bucket__container">
  <Bucket type="sketch" url="https://docs.royalnavy.io/design-system.sketch" />
  <Bucket type="storybook" url="https://storybook.royalnavy.io/?path=/docs/badge--default" />
</div>

# Overview
A visual indicator useful for status information or meta data associated with an element.
<BadgeComponent />

## Usage

The Badge component is an indicator component that displays information to the user. It comes in two varieties - the default, rectangular Badge, and the [Pill variation](#pill).

### Anatomy
<BadgeAnatomy />

1. **Label**. Labels describe the Badge to the user. If text is not used, an icon should be used in its place.
2. **Container**. The container element wraps the component.

### Sizing & Spacing
<BadgeSizes />

The Badge component is available in four sizes - small, regular, large and xLarge.

### States 
<BadgeStates />

The Badge component has five available states to use - Neutral, Primary, Success, Warning, and Danger. The badge component does not have any interaction, so there are no 'hover/active' states available.

### Hierarchy & Placement
Try to avoid mixing states and sizes, as this can become confusing for the user.

### Pill
<Pill />

The Pill Badge is a variation of the Badge component.

#### Usage
The Pill Badge is used predominantly to act as a counter, displaying integer numbers (e.g. as a notification badge).

#### States
<PillStates />

The Pill Badge component is also available in 5 states - `Neutral`, `Primary`, `Success`, `Warning`, and `Danger`.
