---
title: Popover
description: Popover is a self-contained modal or dialogue that appears in context next to a trigger element.
header: true
---

import { Popover, Tab, TabSet } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import SketchWidget from '../../../components/presenters/sketch-widget'

import PopoverComponent from '../../images/components/popover/Component'
import PopoverAnatomy from '../../images/components/popover/Anatomy'

# Overview

A popover is a self-contained modal or dialogue that appears in context next to a trigger element. It contains more content than a tooltip, but is directly related to a trigger element in the same way as a tooltip.

<PopoverComponent />

<TabSet>
<Tab title="Design">

  <SketchWidget name="Popover" href="/design-system.sketch" />

  ### Anatomy

  <PopoverAnatomy />

  1. **Trigger**. This element triggers the Popover container to appear. It also anchors the Popover, so it will display beside the trigger.
  2. **Popover container**. Much like the Card component, the Popover container accepts content and components. Its layout is dictated by the content it is displaying.

  ### Sizing and Spacing
  Whilst the size of the popover should be dictated by its content, try to limit the overall size of the component. It should be there to provide additional context, not as a way to inline functionality that should either be a standalone page, or an actual modal/dialog.

  ### Hierarchy & Placement
  Only one Popover can be active on a page at a time.
  
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
    Name: 'closeDelay',
    Type: 'number',
    Required: 'False',
    Default: '1000',
    Description: 'Length of time in milliseconds when the Popover will close after the mouse leaves the target element.',
  },
  {
    Name: 'content',
    Type: 'React.ReactElement',
    Required: 'False',
    Default: '',
    Description: 'Arbitrary JSX to be rendered within the popover on hover.',
  },
  {
    Name: 'isClick',
    Type: 'boolean',
    Required: 'False',
    Default: '',
    Description: 'If this is true then the popover is shown when clicked, otherwise it uses the default hover.',
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
