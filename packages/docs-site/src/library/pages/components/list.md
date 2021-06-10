---
title: List
description: Display a list of items to the user.
header: true
---

import ListComponent from '../../images/components/list/Component'
import ListAnatomy from '../../images/components/list/Anatomy'

import Bucket from '../../../components/presenters/bucket'

<div className="bucket__container">
  <Bucket type="sketch" url="https://docs.royalnavy.io/design-system.sketch" />
  <Bucket type="storybook" url="https://storybook.royalnavy.io/?path=/docs/list--default" />
</div>


# Overview

<ListComponent />

The List component is an enhanced variation of the HTML unordered list. It provides space for a title and description.

## Usage
Use the List component to display a visually clean set of list items.

### Anatomy

<ListAnatomy />

1. **Container**. The container wraps the entire list component.
2. **Title**. The title for the List Item.
3. **Description**. Accompanying text for additional context.

### Sizing & Spacing
The List component will automatically resize itself based on the content it is supplied with.

### Hierarchy & Placement
There are no restrictions over List placement.
