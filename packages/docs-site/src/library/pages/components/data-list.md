---
title: Data List
description: A description list, with terms and descriptions.
header: true
draft: true
---

import { DataList, DataListItem, TabSet, Tab } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import SketchWidget from '../../../components/presenters/sketch-widget'

# Overview

TODO

## Usage

TODO

<TabSet>
<Tab title="Design">

<SketchWidget name="DataList" href="/design-system.sketch" />

### Anatomy

TODO

</Tab>

<Tab title="Develop">

### Basic Usage
<CodeHighlighter source={`<DataList title="Title">
  <DataListItem description="Name">Horatio Nelson</DataListItem>
  <DataListItem description="Age">44</DataListItem>
  <DataListItem description="Location">Portsmouth</DataListItem>
</DataList>
`} language="javascript">
<DataList title="Title">
  <DataListItem description="Name">Horatio Nelson</DataListItem>
  <DataListItem description="Age">44</DataListItem>
  <DataListItem description="Location">Portsmouth</DataListItem>
</DataList>
</CodeHighlighter>

### Collapsible Usage
<CodeHighlighter source={`<DataList title="Title" isCollapsible>
  <DataListItem description="Name">Horatio Nelson</DataListItem>
  <DataListItem description="Age">44</DataListItem>
  <DataListItem description="Location">Portsmouth</DataListItem>
</DataList>
`} language="javascript">
<DataList title="Title" isCollapsible>
  <DataListItem description="Name">Horatio Nelson</DataListItem>
  <DataListItem description="Age">44</DataListItem>
  <DataListItem description="Location">Portsmouth</DataListItem>
</DataList>
</CodeHighlighter>

### DataList Properties
<DataTable data={[
  {
    Name: 'title',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'The title text to display at the top of the DataList.',
  },
  {
    Name: 'children',
    Type: 'DataListItem[]',
    Required: 'True',
    Default: '',
    Description: 'An array of DataListItem elements representing key value pairs.',
  },
  {
    Name: 'isCollapsible',
    Type: 'boolean',
    Required: 'False',
    Default: 'False',
    Description: 'A flag to toggle between collapsible and non collapsbile variants.',
  }
]} />

### DataListItem Properties
<DataTable data={[
  {
    Name: 'description',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'The key text of a DataListItem.',
  },
  {
    Name: 'children',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'The value text of a DataListItem.',
  }
]} />

</Tab>
</TabSet>
