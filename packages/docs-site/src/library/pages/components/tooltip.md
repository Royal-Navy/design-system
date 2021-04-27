---
title: Tooltip
description: The Tooltip displays extra information when hovered or tapped on.
header: true
---

import TooltipComponent from '../../images/components/tooltip/Component'
import TooltipAnatomy from '../../images/components/tooltip/Anatomy'
import TooltipStates from '../../images/components/tooltip/States'
import TooltipVariations from '../../images/components/tooltip/Variations'

import Bucket from '../../../components/presenters/bucket'

<div className="bucket__container">
  <Bucket type="sketch" url="https://docs.royalnavy.io/design-system.sketch" />
  <Bucket type="storybook" url="https://storybook.royalnavy.io/?path=/docs/tooltip--default" />
</div>

# Overview
The Tooltip is a small component that can display text information to the user, hidden under a tap or a hover.

<TooltipComponent />

## Usage
The tooltip should be used wherever including extra detail would be beneficial to the user. The Tooltip is hidden under an Information Icon and will only display itself when hovered or tapped (mobile) on.

### Anatomy
<TooltipAnatomy />

The Tooltip component has two main sections - the main navigational area at the top of the bar, and the fixed area at the bottom of the bar.

1. **Trigger**. This is the element that is interacted with to display the Tooltip. In this instance, the trigger is placed on an Information Icon.
2. **Tooltip Item**. The Tooltip Item floats above the Information Icon 
3. **Tooltip Title (Optional)**. Add a Title to accompany the main Tooltip Body.
4. **Tooltip Message**. The Tooltip Message contains the main content of the tooltip. This section is required, unlike the title.


### Sizing & Spacing
The Tooltip is only available in 1 size. 

### States
<TooltipStates />

The Tooltip has two states - Default and Hovered/Tapped (mobile). By default, the Tooltip Item is hidden. Hovering on the Information Icon will fade the Tooltip in to show the text info.

### Hierarchy & Placement
There is no hard limit to the number of Tooltips that can be added to a page, however, try to use them sparingly.

### Variations

<TooltipVariations />
The Tooltip comes in two variations - with and without the Tooltip Title. You can also set the direction of the tooltip to be either the Top, Right, Left, or Bottom.
