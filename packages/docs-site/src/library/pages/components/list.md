---
title: List
description: todo
header: true
draft: true
---


import { List, ListItem, TabSet, Tab } from '@royalnavy/react-component-library'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import DataTable from '../../../components/presenters/data-table'

# Overview
todo

## Usage
todo

<TabSet>
<Tab title="Design">

### Anatomy

todo


### Sizing & Spacing
todo

### Hierarchy & Placement
todo

### States

todo

### Variations
todo

</Tab>

<Tab title="Develop">

### Basic Usage
<CodeHighlighter source={`<List>
  <ListItem onClick={() => {}} title="List item 3">
    This is the description for item 3
  </ListItem>
  <ListItem onClick={() => {}} title="List item 4">
    This is the description for item 4
  </ListItem>
</List>`} language="javascript">
<List>
  <ListItem onClick={() => {}} title="List item 1">
    This is the description for item 1
  </ListItem>
  <ListItem onClick={() => {}} title="List item 2">
    This is the description for item 2
  </ListItem>
</List>
</CodeHighlighter>

### List Properties
<DataTable data={[
  {
    Name: 'children',
    Type: 'React.ReactElement<ListItemProps> | React.ReactElement<ListItemProps>[]',
    Required: 'True',
    Default: '',
    Description: 'Items inside the list',
  },
  {
    Name: 'className',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'Custom CSS class to add to the component',
  },
]} />

### List Item Properties
<DataTable data={[
  {
    Name: 'children',
    Type: 'string | string[]',
    Required: 'True',
    Default: '',
    Description: 'Text content of the item',
  },
  {
    Name: 'className',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'Custom CSS class to add to the component',
  },
  {
    Name: 'onClick',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'Callback will be called when the item is clicked',
  },
  {
    Name: 'title',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'Title of the item',
  },
]} />

</Tab>
</TabSet>
