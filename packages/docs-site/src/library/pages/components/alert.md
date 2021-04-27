---
title: Alert
description: Alerts are a great way to provide contextual feedback to a user.
header: true
---

import AlertComponent from '../../images/components/alert/Component'
import AlertAnatomy from '../../images/components/alert/Anatomy'
import AlertStates from '../../images/components/alert/States'

import Bucket from '../../../components/presenters/bucket'

<div className="bucket__container">
  <Bucket type="sketch" url="https://docs.royalnavy.io/design-system.sketch" />
  <Bucket type="storybook" url="https://storybook.royalnavy.io/?path=/docs/alert--default" />
</div>

# Overview

<AlertComponent />

## Usage
The usage of the Alert component is derived from the context it will be placed in. There are four Alert variations - info, success, warning, and danger. By default, the Info Alert should be used, with the stateful Alerts being placed to either confirm an action or inform the user that the action may be dangerous (e.g. deleting data).

### Anatomy

<AlertAnatomy />

1. **Container**. This wraps the component. By default, it extends the full width of its parent.
2. **Title (Optional)**. This can be added to the Alert when the Description alone is not sufficient enough.
3. **Description**. This explains the Alert and is always required.
4. **Icon**. The icon is always present, however changes depending on the State of the Alert component.

### Sizing & Spacing
The Alert is only available in one size. It can, however, grow vertically depending on the length of the description provided.

### Hierarchy & Placement
Alerts should generally be placed above the content in which they are referring to.

### States

<AlertStates />

The Alert Component has four states - info, success, warning, and danger.

### Variations
Each Alert comes in two variations - Title & Description, and just a Description.
