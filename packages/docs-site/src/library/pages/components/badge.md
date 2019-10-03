---
title: Badge
description: Badges are one of the foundational elements of any application.
header: true
---

import { Badge, Tab, TabSet } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import SketchWidget from '../../../components/presenters/sketch-widget'
import BadgeComponent from '../../images/components/badge/component.svg'
import BadgeAnatomy from '../../images/components/badge/anatomy.svg'
import BadgeSizes from '../../images/components/badge/sizes.svg'
import BadgeStates from '../../images/components/badge/states.svg'
import Pill from '../../images/components/badge/pill.svg'
import PillStates from '../../images/components/badge/pill-states.svg'


# Overview
A visual indicator useful for status information or meta data associated with an element.
<BadgeComponent />

## Usage

<TabSet>

<Tab title="Design">

<SketchWidget name="Badge" href="/standards-toolkit.sketch" />


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

#### States (if applicable)
<PillStates />

The Pill Badge component is also available in 5 states - Neutral, Primary, Success, Warning, and Danger.

</Tab>


<Tab title="Develop">
A Button can be solid or faded and can either be a regular badge shape or more rounded
in the form of a pill.

### Basic Usage
<CodeHighlighter source={`<Badge color="neutral" colorVariant="faded">Neutral</Badge>`} language="javascript">
  <Badge color="neutral" colorVariant="faded">Neutral</Badge>
</CodeHighlighter>

### Variants
Badges can be rendered using a variety of colours combined with an instruction to render a faded or solid badge.

<CodeHighlighter 
source={`<Badge color="neutral" colorVariant="faded">Neutral</Badge>
<Badge color="primary" colorVariant="faded">Primary</Badge>
<Badge color="danger" colorVariant="faded">Danger</Badge>
<Badge color="warning" colorVariant="faded">Warning</Badge>
<Badge color="success" colorVariant="faded">Success</Badge>

<Badge color="neutral" colorVariant="solid">Neutral</Badge>
<Badge color="primary" colorVariant="solid">Primary</Badge>
<Badge color="danger" colorVariant="solid">Danger</Badge>
<Badge color="warning" colorVariant="solid">Warning</Badge>
<Badge color="success" colorVariant="solid">Success</Badge>
`} language="javascript"
>
  <p>
    <Badge color="neutral" colorVariant="faded">Neutral</Badge>
    <Badge color="primary" colorVariant="faded">Primary</Badge>
    <Badge color="danger" colorVariant="faded">Danger</Badge>
    <Badge color="warning" colorVariant="faded">Warning</Badge>
    <Badge color="success" colorVariant="faded">Success</Badge>
  </p>
  <p>
    <Badge color="neutral" colorVariant="solid">Neutral</Badge>
    <Badge color="primary" colorVariant="solid">Primary</Badge>
    <Badge color="danger" colorVariant="solid">Danger</Badge>
    <Badge color="warning" colorVariant="solid">Warning</Badge>
    <Badge color="success" colorVariant="solid">Success</Badge>
  </p>
</CodeHighlighter>

### Sizes
Badges can be rendered in four different size variants.

<CodeHighlighter source={`<Badge colorVariant="faded" size="small">Small</Badge>
<Badge colorVariant="faded" size="regular">Neutral</Badge>
<Badge colorVariant="faded" size="large">Large</Badge>
<Badge colorVariant="faded" size="xlarge">xLarge</Badge>
`} language="javascript"
>
  <Badge colorVariant="faded" size="small">Small</Badge>
  <Badge colorVariant="faded" size="regular">Neutral</Badge>
  <Badge colorVariant="faded" size="large">Large</Badge>
  <Badge colorVariant="faded" size="xlarge">xLarge</Badge>
</CodeHighlighter>


### Pill variations
Icons can be added to a button and currently can only be shown to the right of the label. Icons should take the form of an SVG component.

<CodeHighlighter 
source={`<Badge color="neutral" variant="pill">Neutral</Badge>
<Badge color="primary" variant="pill">Primary</Badge>
<Badge color="danger" variant="pill">Danger</Badge>
<Badge color="warning" variant="pill">Warning</Badge>
<Badge color="success" variant="pill">Success</Badge>
`} language="javascript"
>
  <Badge color="neutral" variant="pill">Neutral</Badge>
  <Badge color="primary" variant="pill">Primary</Badge>
  <Badge color="danger" variant="pill">Danger</Badge>
  <Badge color="warning" variant="pill">Warning</Badge>
  <Badge color="success" variant="pill">Success</Badge>
</CodeHighlighter>

### Properties
<DataTable data={[
  {
    Name: 'children',
    Type: 'ReactNode',
    Required: 'True',
    Default: '',
    Description: 'The content to place in the button, typically text',
  },
  {
    Name: 'className',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'Custom css class to add to the badge element',
  },
  {
    Name: 'color',
    Type: 'string (neutral / primary / danger / warning / success)',
    Required: 'False',
    Default: 'neutral',
    Description: 'The colour for the badge',
  },
  {
    Name: 'colorVariant',
    Type: 'string (solid / faded)',
    Required: 'False',
    Default: 'solid',
    Description: 'The colour style for the button',
  },
  {
    Name: 'size',
    Type: 'string (small / regular / large / xlarge)',
    Required: 'False',
    Default: 'regular',
    Description: 'The size for the button',
  },
  {
    Name: 'variant',
    Type: 'string (pill)',
    Required: 'False',
    Default: '',
    Description: 'The style variation',
  },
]} />

</Tab>
</TabSet>
