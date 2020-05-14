---
title: Drawer
description: Drawer is a simple panel that can be triggered to appear on the right hand side of the screen.
header: true
---

import { Drawer, Tab, TabSet } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import SketchWidget from '../../../components/presenters/sketch-widget'

import DrawerComponent from '../../images/components/drawer/Component'
import DrawerAnatomy from '../../images/components/drawer/Anatomy'

# Overview

Drawer is a simple panel that can be triggered to appear on the right hand side of the screen.

<DrawerComponent />

## Usage

The Drawer is used to show more details for a specific item in a list or table. It provides an inline way to view more comprehensive information about the item, including space for forms and images.

<TabSet>
<Tab title="Design">

  <SketchWidget name="Drawer" href="/design-system.sketch" />

  
  ### Anatomy

  <DrawerAnatomy />

  1. **Sheet**. Much like the Card component, the Drawer Sheet is a blank canvas to add components to.
  2. **Close Button**. The Close Button triggers the hiding animation, causing the Drawer to slide out to the right of the viewport.

  ### States
  The Drawer has two states - hidden and visible. By default, the Drawer is hidden off the right hand side of the screen. Clicking on an item that triggers the Drawer will cause the drawer to slide in from the edge of the screen.

  Clicking the Close button will reverse this animation.
  
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
