---
title: Badge
description: Badges are one of the foundational elements of any application.
---

import { Badge, Tab, TabSet } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'


# Badge
A visual indicator useful for status information or meta data associated with an element

## Usage

<TabSet>

<Tab title="Design">

  ## Design
  Introduction to the design section.

  ### Anatomy
  The Anatomy is the breakdown of the component.

  [ Image breaking down the component’s anatomy ]

  Each part of the component in the image should be labelled with a number. Underneath, create a list of each of the labeled items, explaining what they are. This list should also indicate to the reader whenever an item is an optional include.

  Any specific notes on a part of the anatomy breakdown should be included here. This includes dos and don’ts with accompanying image examples.

  ### Sizing & Spacing
  Much like the Anatomy section, the Sizing & Spacing section should be a breakdown of the construction of the component. Red line guides should be added to the component, showing the spacing between the different anatomy parts.

  ### States (if applicable) 
  This section covers all the different component states including its default state, hover, active, and disabled.
  [ Image / interactive example of component states ]

  ### Hierarchy & Placement
  This section covers how a component should sit within an application’s hierarchy. It also provides insight as when to use the different variations listed below.

  ### Variation [ Repeatable Section ] 
  Introduction to the component variation. For each sub heading, outline any differences between the default component and this variation. 

  [ Image / interactive example of Component ]

  #### Usage

  #### Anatomy
  [ Image breaking down the component’s anatomy ]

  #### Sizing & Spacing
  [ Image of component with red guide lines overlaid ]

  #### States (if applicable)
  [ Image / interactive example of component states ]

  #### Hierarchy & Placement

  ### Adornments [ Repeatable Section ]
  Include any component adornments here. Much like the variations section above, this section is repeatable.

  [ Image / interactive example of Component ]

  #### Usage

  #### Anatomy
  [ Image breaking down the component’s anatomy ]

  ### Sizing & Spacing
  [ Image of component with red guide lines overlaid ]

  ### States (if applicable)
  [ Image / interactive example of component states ]

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
Badges can be rendered in 4 different size variants.

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
