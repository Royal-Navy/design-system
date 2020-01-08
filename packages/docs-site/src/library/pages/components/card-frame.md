---
title: Card Frame
description: The Card Frame is a very simple component designed to wrap all cards.
header: true
---


import { CardFrame, TabSet, Tab } from '@royalnavy/react-component-library'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import DataTable from '../../../components/presenters/data-table'


# Overview
The Card Frame is a very simple component designed to wrap all cards.

todo

## Usage
todo

<TabSet>
<Tab title="Design">

### Sizing & Spacing
todo

### Hierarchy & Placement
todo

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
