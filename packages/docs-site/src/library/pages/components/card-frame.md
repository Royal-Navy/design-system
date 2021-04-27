---
title: Card Frame
description: The Card Frame is a very simple component designed to wrap all cards.
header: true
---

import CardComponent from '../../images/components/card/Component'
import CardAnatomy from '../../images/components/card/Anatomy'

import Bucket from '../../../components/presenters/bucket'

<div className="bucket__container">
  <Bucket type="sketch" url="https://docs.royalnavy.io/design-system.sketch" />
  <Bucket type="storybook" url="https://storybook.royalnavy.io/?path=/docs/card-frame--default" />
</div>

# Overview
The Card component is a visual way of displaying information and actions. It can contain multiple sub-components, including items such as buttons, badges, or even images. The Card should always be kept to a single subject.

The Card Frame is a very simple component designed to wrap all cards.

<CardComponent />

### Anatomy
<CardAnatomy />

1. **Frame**. This element wraps the component.
2. **Content**. Components and content can be placed here. Ensure the content is related to a single subject.

### Sizing & Spacing
The Card component can shrink or grow depending on its content.

### Hierarchy & Placement
The Card component can be used either by itself, or alongside other card components. An individual card should only contain information relating to a single subject.
