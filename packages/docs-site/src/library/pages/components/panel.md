---
title: Panel
description: The Panel component is a simple visual wrapper.
header: true
---


import { TabSet, Tab } from '@royalnavy/react-component-library'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import DataTable from '../../../components/presenters/data-table'


import PanelComponent from '../../images/components/panel/Component'

# Overview
The panel component is a simple wrapper that visually separates content.

<PanelComponent />

## Usage
Use the Panel as a top level group for a page. It provides a great way to visually split separate, yet relevant information on a single screen.

<TabSet>
<Tab title="Design">

### Sizing & Spacing
The Panel has no inherit sizing itself. It is designed to occupy 100% of its parent container, however can be modified to suit your needs.

### Hierarchy & Placement
Try to avoid nesting panels - components and data that relate should remain in the same visual hierarchy.

</Tab>

<Tab title="Develop">

### Basic Usage
<CodeHighlighter source={`<Panel>Content</Panel>`} language="javascript" />

### Panel Properties
<DataTable data={[
  {
    Name: 'children',
    Type: '',
    Required: 'False',
    Default: '',
    Description: 'Arbitrary content for the panel.',
  },
]} />

</Tab>
</TabSet>
