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

A popover is a self-contained modal or dialogue that appears in context next to a trigger element. It contains more content than a tooltip, but is directly related to a trigger element in the same way as a tooltip.

## Usage

<TabSet>
<Tab title="Design">

  <SketchWidget name="Popover" href="/standards-toolkit.sketch" />
  
</Tab>
<Tab title="Develop">

A popover is a self-contained modal or dialogue that appears in context next to a trigger element. It contains more content than a tooltip, but is directly related to a trigger element in the same way as a tooltip.

### Basic Usage

<CodeHighlighter source={`<Popover
  placement="left"
  content={
    <div style={{ padding: '1rem' }}>This is some arbitrary JSX</div>
  }
>
  <div
    style={{
      display: 'inline-block',
      padding: '1rem',
      backgroundColor: '#c9c9c9',
    }}
  >
    Hover on me!
  </div>
</Popover>
`} language="javascript">
  <Popover
    placement="right"
    content={
      <div style={{ padding: '1rem' }}>This is some arbitrary JSX</div>
    }
  >
    <div
      style={{
        display: 'inline-block',
        padding: '1rem',
        backgroundColor: '#c9c9c9',
      }}
    >
      Hover on me!
    </div>
  </Popover>
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
  {
    Name: 'content',
    Type: 'React.ReactElement',
    Required: 'False',
    Default: '',
    Description: 'Arbitrary JSX to be rendered within the popover on hover.',
  },
  {
    Name: 'scheme',
    Type: '"dark"|"light"',
    Required: 'False',
    Default: '"light"',
    Description: 'The colour scheme to apply to the popover.',
  },
  {
    Name: 'placement',
    Type: '"above"|"below"|"left"|"right"',
    Required: 'True',
    Default: '',
    Description: 'Where to position the popover in relation to the target element.',
  },
]} />
</Tab>
</TabSet>
