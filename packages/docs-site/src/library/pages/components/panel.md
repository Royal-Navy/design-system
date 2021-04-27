---
title: Panel
description: The Panel component is a simple visual wrapper.
header: true
---

import Bucket from '../../../components/presenters/bucket'

<div className="bucket__container">
  <Bucket type="sketch" url="https://docs.royalnavy.io/design-system.sketch" />
  <Bucket type="storybook" url="https://storybook.royalnavy.io/?path=/docs/panel--default" />
</div>

import PanelComponent from '../../images/components/panel/Component'

# Overview
The panel component is a simple wrapper that visually separates content.

<PanelComponent />

## Usage
Use the Panel as a top level group for a page. It provides a great way to visually split separate, yet relevant information on a single screen.

### Sizing & Spacing
The Panel has no inherit sizing itself. It is designed to occupy 100% of its parent container, however can be modified to suit your needs.

### Hierarchy & Placement
Try to avoid nesting panels - components and data that relate should remain in the same visual hierarchy.
