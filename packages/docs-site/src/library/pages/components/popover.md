---
title: Popover
description: Popover is a self-contained modal or dialogue that appears in context next to a trigger element.
header: true
draft: true
---

import { Popover, Tab, TabSet } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import SketchWidget from '../../../components/presenters/sketch-widget'

# Overview

A popover is a self-contained modal or dialogue that appears in context next to a trigger element. It contains more content that a tooltip, but is directly related to a trigger element in the same way as a tooltip.

## Usage

<TabSet>
<Tab title="Design">

  <SketchWidget name="Popover" href="/standards-toolkit.sketch" />
  
</Tab>
<Tab title="Develop">

A popover is a self-contained modal or dialogue that appears in context next to a trigger element. It contains more content that a tooltip, but is directly related to a trigger element in the same way as a tooltip.

### Basic Usage

<CodeHighlighter source={`
`} language="javascript">
</CodeHighlighter>


### Popover Properties
<DataTable data={[
  {
    Name: 'className',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'Custom CSS class to add to the Popover element.',
  },
]} />
</Tab>
</TabSet>
