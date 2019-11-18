---
title: Alert
description: todo
header: true
---


import { TabSet, Tab } from '@royalnavy/react-component-library'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import DataTable from '../../../components/presenters/data-table'



# Overview
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
<CodeHighlighter source={`<Alert title="Alert Title" variant={ALERT_VARIANT.WARNING}>
  This is the alert description.
</Alert>`} language="javascript" />

### Alert Properties
<DataTable data={[
  {
    Name: 'children',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'Content of the alert.',
  },
  {
    Name: 'onClose',
    Type: 'func',
    Required: 'False',
    Default: '',
    Description: 'Optional callback which is invoked when the alert is closed.',
  },
  {
    Name: 'title',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'Title of the alert.',
  },
  {
    Name: 'variant',
    Type: 'string',
    Required: 'False',
    Default: 'info',
    Description: 'Variant of the alert, can be `danger`, `info`, `success` or `warning`.',
  },
]} />

</Tab>
</TabSet>
