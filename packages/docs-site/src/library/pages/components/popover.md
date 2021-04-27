---
title: Popover
description: Popover is a self-contained modal or dialogue that appears in context next to a trigger element.
header: true
---

import PopoverComponent from '../../images/components/popover/Component'
import PopoverAnatomy from '../../images/components/popover/Anatomy'

import Bucket from '../../../components/presenters/bucket'

<div className="bucket__container">
  <Bucket type="sketch" url="https://docs.royalnavy.io/design-system.sketch" />
  <Bucket type="storybook" url="https://storybook.royalnavy.io/?path=/docs/popover--default" />
</div>

# Overview

A popover is a self-contained modal or dialogue that appears in context next to a trigger element. It contains more content than a tooltip, but is directly related to a trigger element in the same way as a tooltip.

<PopoverComponent />

### Anatomy

<PopoverAnatomy />

1. **Trigger**. This element triggers the Popover container to appear. It also anchors the Popover, so it will display beside the trigger.
2. **Popover container**. Much like the Card component, the Popover container accepts content and components. Its layout is dictated by the content it is displaying.

### Sizing and Spacing
Whilst the size of the popover should be dictated by its content, try to limit the overall size of the component. It should be there to provide additional context, not as a way to inline functionality that should either be a standalone page, or an actual modal/dialog.

### Hierarchy & Placement
Only one Popover can be active on a page at a time.
