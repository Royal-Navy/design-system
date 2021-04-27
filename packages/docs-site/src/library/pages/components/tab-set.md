---
title: Tab Set
description: The Tab Set displays multiple content areas, which can be viewed by selecting the respective tab.
header: true
---

import TabSetScrollableComponent from '../../images/components/tabset/ScrollableComponent'
import TabSetScrollableAnatomy from '../../images/components/tabset/ScrollableAnatomy'
import TabSetScrollableStates from '../../images/components/tabset/ScrollableStates'

import Bucket from '../../../components/presenters/bucket'

<div className="bucket__container">
  <Bucket type="sketch" url="https://docs.royalnavy.io/design-system.sketch" />
  <Bucket type="storybook" url="https://storybook.royalnavy.io/?path=/docs/tab-set--default" />
</div>

# Overview

<TabSetComponent />

## Usage
The Tab Set component is used to separate content that exists at the same level of hierarchy. It provides easy navigation between these sections.

The Tab Set component comes in two distinct varieties - the default Tab Set and the [Scrollable Tab Set](#scrollable-tabs).

### Anatomy

<TabSetAnatomy />

1. **Active Tab**. This shows the user the currently selected tab.
2. **Inactive Tab**. This is the default look for an unselected tab.
3. **Container**. The container wraps the component.

### Sizing & Spacing
The Tab Set component is available in one size. The tabs can accept text, icons, or a combination of both. Ensure the tab text is kept concise - it should clearly describe the content it contains.

### States
The Tab Set component has three states - `default`, `hover`, and `active`.
<TabSetStates />

### Hierarchy & Placement
Tab Sets are used to separate content of the same hierarchy. They should therefore not be nested within each other. If you require child content to be separated, this should be added to a new sub-page, rather than a subset of the Tab Set.

### Scrollable Tabs
Scrollable Tabs are a variation of the Tab Set component, specifically designed for navigating dates.

<TabSetScrollableComponent />  

#### Usage
Scrollable tabs are used for date ranges, where the number of dates often exceeds the horizontal width of the Tab Set. 

#### Anatomy
<TabSetScrollableAnatomy />

1. **Active Tab**. This shows the user the currently selected tab.
2. **Inactive Tab**. This is the default look for an unselected tab.
3. **Container**. The container wraps the component.
3. **Scroll Buttons**. The Scroll Buttons navigate the tabs, moving the date incrementally by a single value on each click.

#### Sizing & Spacing
The Scrollable Tab Set component is available in one size. The tabs display a date and cannot be customised to accept free text - the only variation allowed is the overall date range (e.g. hour, day, week, or month).

#### States
Much like the default Tab Set component, the Scrollable Tab Set has three states - default, hover, and active.
<TabSetScrollableStates />

#### Hierarchy & Placement
The Scrollable Tab Set is a top level navigational component, so therefore it should not be nested inside any other scrollable Tab Set component.
