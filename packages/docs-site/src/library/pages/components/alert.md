---
title: Alert
description: The Alert  
header: true
---


import { TabSet, Tab } from '@royalnavy/react-component-library'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import DataTable from '../../../components/presenters/data-table'



# Overview
Alerts are a great way to provide contextual feedback to a user.

## Usage
The usage of the Alert component is derived from the context it will be placed in. There are four Alert variations - info, success, warning, and danger. By default, the Info Alert should be used, with the stateful Alerts being placed to either confirm an action or inform the user that the action may be dangerous (e.g. deleting data).

<TabSet>
<Tab title="Design">

### Anatomy

1. **Container**. This wraps the component. By default, it extends the full width of its parent.
2. **Title (Optional)**. This can be added to the Alert when the Description alone is not sufficient enough.
3. **Description**. This explains the Alert and is always required.
4. **Icon**. The icon is always present, however changes depending on the State of the Alert component.

### Sizing & Spacing
The Alert is only available in one size. It can, however, grow vertically depending on the length of the description provided.

### Hierarchy & Placement
Alerts should generally be placed above the content in which they are referring to.

### States
The Alert Component has four states - info, success, warning, and danger.

### Variations
Each Alert comes in two variations - Title & Description, and just a Description.

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
