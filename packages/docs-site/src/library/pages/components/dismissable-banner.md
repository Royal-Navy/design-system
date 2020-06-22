---
title: Dismissable Banner
description: todo
header: true
draft: true
---

import { DismissibleBanner } from '@royalnavy/react-component-library'

import { TabSet, Tab } from '@royalnavy/react-component-library'
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
<CodeHighlighter source={`<DismissibleBanner onDismiss={(e, can) => console.log('result', e, can)}>
  <p>Some content</p>
</DismissibleBanner>`} language="javascript">
<DismissibleBanner onDismiss={(e, can) => console.log('result', e, can)}>
  <p>Some content</p>
</DismissibleBanner>
</CodeHighlighter>


### Dismissible Banner Properties
It is possible to compose a Dismissible banner with two sets of properties.
#### Dismissible Banner with heading and text content
<DataTable data={[
  {
    Name: 'hasCheckbox',
    Type: 'string',
    Required: 'False',
    Default: 'true',
    Description: 'If this is false then then the checkbox is not displayed',
  },
  {
    Name: 'children',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'Content of the Dismissible Banner',
  },
  {
    Name: 'onDismiss',
    Type: '(event: React.FormEvent<HTMLButtonElement>, canShowAgain: boolean) => void',
    Required: 'True',
    Default: '',
    Description: 'Callback for when the button is clicked',
  },
  {
    Name: 'title',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'Heading of the Dismissible Banner',
  },
]} />

#### Dismissible Banner with arbitrary content
<DataTable data={[
  {
    Name: 'hasCheckbox',
    Type: 'string',
    Required: 'False',
    Default: 'true',
    Description: 'If this is false then then the checkbox is not displayed',
  },
  {
    Name: 'children',
    Type: 'React.ReactElement',
    Required: 'True',
    Default: '',
    Description: 'Content of the Dismissible Banner',
  },
  {
    Name: 'onDismiss',
    Type: '(event: React.FormEvent<HTMLButtonElement>, canShowAgain: boolean) => void',
    Required: 'True',
    Default: '',
    Description: 'Callback for when the button is clicked',
  },
]} />

</Tab>
</TabSet>
