---
title: Tab Set
description: The Tab Set displays multiple content areas, which can be viewed by selecting the respective tab.
---

import { Tab, TabSet } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import Component from '../../images/components/tabset/component.svg'
import Anatomy from '../../images/components/tabset/anatomy.svg'
import States from '../../images/components/tabset/states.svg'
import ScrollableComponent from '../../images/components/tabset/scrollable-component.svg'
import ScrollableAnatomy from '../../images/components/tabset/scrollable-anatomy.svg'
import ScrollableStates from '../../images/components/tabset/scrollable-states.svg'



# Tab Set
The Tab Set displays multiple content areas, which can be viewed by selecting the respective tab.

<Component />

## Usage
The Tab Set component is used to separate content that exists at the same level of hierarchy. It provides easy navigation between these sections.

<TabSet>

<Tab title="Design">

The Tab Set component comes in 2 distinct varieties - the default Tab Set and the [Scrollable Tab Set](#scrollable-tabs).

### Anatomy

<Anatomy />

1. **Active Tab**. This show the user the currently selected tab.
2. **Inactive Tab**. This is the default look for an unselected tab.
3. **Container**. The container wraps the component.

### Sizing & Spacing
The Tab Set component is available in one size. The tabs can accept text, icons, or a combination of both. Ensure the tab text is kept concise - it should clearly describe the content it contains.

### States
The Tab Set component has 3 states - default, hover, and active.
<States />

### Hierarchy & Placement
Tab Sets are used to separate content of the same hierachy. They should therefore not be nested within each other. If you require child content to be separated, this should be added to a new subpage, rather than a subset of the Tab Set.

### Scrollable Tabs
Scrollable Tabs are a variation of the Tab Set component, specifically designed for navigating dates.
<ScrollableComponent />
  
#### Usage
Scrollable tabs are used for date ranges, where the number of dates often exceeds the horizontal width of the Tab Set. 

#### Anatomy
<ScrollableAnatomy />
1. **Active Tab**. This show the user the currently selected tab.
2. **Inactive Tab**. This is the default look for an unselected tab.
3. **Container**. The container wraps the component.
3. **Scroll Buttons**. The Scroll Buttons navigate the tabs, moving the date incrementally by a single value on each click.

#### Sizing & Spacing
The Scrollable Tab Set component is available in one size. The tabs display a date and cannot be customised to accept free text - the only variation allowed is the overall date range (e.g. hour, day, week, or month).

#### States (if applicable)
Much like the default Tab Set component, the Scrollable Tab Set has 3 states - default, hover, and active.
<ScrollableStates />

#### Hierarchy & Placement
The Scrollable Tab Set is a top level navigational component, so therefore it should not be nested inside any other scrollable Tab Set component.


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
