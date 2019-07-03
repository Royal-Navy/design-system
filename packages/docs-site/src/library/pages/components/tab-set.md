---
title: Tab Set
description: Displays multiple content areas, which can be viewed by selecting the respective tab.
---

import { Tab, TabSet } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'


# Tab Set
Displays multiple content areas, which can be viewed by selecting the respective tab.

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
The TabSet (and companion Tab) component allows the user to switch between different sets of related content within a single page.

### Basic Usage
<CodeHighlighter source={`<TabSet>
  <Tab title="Example Tab 1">
    <p>This is some example tab 1 content</p>
  </Tab>
  <Tab title="Example Tab 2">
    <p>This is some example tab 2 content</p>
  </Tab>
</TabSet>
`} language="javascript">
  <TabSet>
    <Tab title="Example Tab 1">
      <p>This is some example tab 1 content</p>
    </Tab>
    <Tab title="Example Tab 2">
      <p>This is some example tab 2 content</p>
    </Tab>
  </TabSet>
</CodeHighlighter>

### TabSet Properties
<DataTable data={[
  {
    Name: 'children',
    Type: 'ReactNode[]',
    Required: 'True',
    Default: '',
    Description: 'A Tab to include within the TabSet. Must be a Tab component.',
  }
]} />

### Tab Properties
<DataTable data={[
  {
    Name: 'title',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'The title to be used for this Tab within the TabSet.',
  },
  {
    Name: 'children',
    Type: 'ReactNode[]',
    Required: 'True',
    Default: '',
    Description: 'The content to place in the Tab. Any JSX is valid.',
  }
]} />

</Tab>
</TabSet>
