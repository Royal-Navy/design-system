---
title: Card
description: The Card component is used to display information and actions about a single subject.
header: true
draft: true
---

import { Tab, TabSet } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import SketchWidget from '../../../components/presenters/sketch-widget'

import CardComponent from '../../images/components/card/Component'
import CardAnatomy from '../../images/components/card/Anatomy'


# Overview

The Card component is a visual way of displaying information and actions. It can contain multiple sub-components, including items such as buttons, badges, or even images. The Card should always be kept to a single subject.

<CardComponent />

## Usage

<TabSet>

<Tab title="Design">

<SketchWidget name="Card" href="/design-system.sketch" />

### Anatomy
<CardAnatomy />

1. **Container**. The container element wraps the component.

### Sizing & Spacing
The Card component can shrink or grow depending on its content.

### Hierarchy & Placement
The Card component can be used either by itself, or alongside other card components. An individual card should only contain information relating to a single subject.


</Tab>


<Tab title="Develop">

</Tab>
</TabSet>
