---
title: Drawer
description: Drawer is a simple panel that can be triggered to appear on the right hand side of the screen.
header: true
draft: true
---

import { Drawer, Tab, TabSet } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import SketchWidget from '../../../components/presenters/sketch-widget'

# Overview

Drawer is a simple panel that can be triggered to appear on the right hand side of the screen.

## Usage

Drawer is a simple panel that can be triggered to appear on the right hand side of the screen.

<TabSet>
<Tab title="Design">

  <SketchWidget name="Drawer" href="/standards-toolkit.sketch" />
  
</Tab>
<Tab title="Develop">

Drawer is a simple panel that can be triggered to appear on the right hand side of the screen.

### Basic Usage

<CodeHighlighter source={`<Drawer isOpen onClose={event => console.log}>
  <h1>Arbitrary JSX</h1>
</Drawer>
`} language="javascript">
<Drawer isOpen onClose={event => console.log}>
  <h1>Arbitrary JSX</h1>
</Drawer>
</CodeHighlighter>


### Avatar Properties
<DataTable data={[
  {
    Name: 'className',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'Custom CSS class to add to the component.',
  },
  {
    Name: 'isOpen',
    Type: 'boolean',
    Required: 'False',
    Default: '',
    Description: 'isOpen flag indicating the open or closed state of the drawer.',
  },
  {
    Name: 'onClose',
    Type: 'func',
    Required: 'False',
    Default: '',
    Description: 'Callback which is invoked when the the drawer is closed.',
  },
]} />
</Tab>
</TabSet>
