---
title: Card Frame
description: The Card Frame is a very simple component designed to wrap all cards.
header: true
---


import { CardFrame, TabSet, Tab } from '@royalnavy/react-component-library'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import DataTable from '../../../components/presenters/data-table'
import SketchWidget from '../../../components/presenters/sketch-widget'

import CardComponent from '../../images/components/card/Component'
import CardAnatomy from '../../images/components/card/Anatomy'


# Overview
The Card component is a visual way of displaying information and actions. It can contain multiple sub-components, including items such as buttons, badges, or even images. The Card should always be kept to a single subject.

The Card Frame is a very simple component designed to wrap all cards.

<CardComponent />


<TabSet>
<Tab title="Design">

<SketchWidget name="Card" href="/standards-toolkit.sketch" />

### Anatomy
<CardAnatomy />

1. **Frame**. This element wraps the component.
2. **Content**. Components and content can be placed here. Ensure the content is related to a single subject.

### Sizing & Spacing
The Card component can shrink or grow depending on its content.

### Hierarchy & Placement
The Card component can be used either by itself, or alongside other card components. An individual card should only contain information relating to a single subject.


</Tab>

<Tab title="Develop">

### Basic Usage
<CodeHighlighter source={`<CardFrame>Content</CardFrame>`} language="javascript">
  <CardFrame>Content</CardFrame>
</CodeHighlighter>

### Card Frame Properties
<DataTable data={[
  {
    Name: 'children',
    Type: '',
    Required: 'False',
    Default: '',
    Description: 'Arbitrary content for the card frame.',
  },
]} />

</Tab>
</TabSet>
