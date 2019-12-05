---
title: Button Group
description: A collection of buttons commonly used to select an option
header: true
---

import { Button,ButtonGroup, Icons, Tab, TabSet } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import SketchWidget from '../../../components/presenters/sketch-widget'

import ButtonGroupComponent from '../../images/components/button-group/Component'
import ButtonGroupAnatomy from '../../images/components/button-group/Anatomy'


# Overview

A Button group is a useful component for grouping together buttons to allow a user to select an option.

<ButtonGroupComponent />

## Usage
The Button Group acts as a wrapper for multiple buttons. It removes the spacing and border radius between adjacent buttons, making them sit flush next to each other. It is used to indicate a relationship between similar actions - pagination and toolbars are great examples of this.

<TabSet>
  <Tab title="Design">

<SketchWidget name="Button group" href="/standards-toolkit.sketch" />

### Anatomy
The Button Group by itself doesn't have any visual elements. The Group simply removes the spacing between buttons and makes them sit flush beside each other.

<ButtonGroupAnatomy />

1. **Container** - wraps the component and removes border-radius and spacing between buttons.
2. **Buttons** - the Button Components added to the Group.

### Sizing & Spacing
The Button Group should always use the same size Button components. This allows the buttons to be positioned flush against each other. The Buttons themselves though can be any of the [available sizes](/components/buttons) outlined on the Button Docs page.

### Hierarchy & Placement
The Button Group is used to collate similar actions together under one consistent grouping. It should only feature Secondary Buttons, as Primary Buttons should be standalone actions.

</Tab>

<Tab title="Develop">

A ButtonGroup accepts an array of button items that provide a label and value for each button. The component then generates a collection of buttons, grouped together, styled similar to a secondary button with a primary hover.

### Basic Usage

<CodeHighlighter source="const items = [{ label: 'One', onClick: onClick }, ...]
...
<ButtonGroup items={items}/>" language="javascript"><ButtonGroup
  items={[
    {
      label: 'One',
      onClick: () => {},
    },
    {
      label: 'Two',
      onClick: () => {},
    },
    {
      disabled: true,
      label: 'Three',
    },
  ]}
/>
</CodeHighlighter>

### Sizes

<CodeHighlighter source={`const items = [{ label: 'One', onClick: onClick }, ...]
...
<ButtonGroup items={items} size="small" />
<ButtonGroup items={items} size="regular" />
<ButtonGroup items={items} size="large" />
<ButtonGroup items={items} size="x-large" />`} language="javascript"><ButtonGroup
  items={[
    {
      label: 'One',
      onClick: () => {},
    },
    {
      label: 'Two',
      onClick: () => {},
    },
    {
      disabled: true,
      label: 'Three',
    },
  ]}
  size="small"
/>
<ButtonGroup
  items={[
    {
      label: 'One',
      onClick: () => {},
    },
    {
      label: 'Two',
      onClick: () => {},
    },
    {
      disabled: true,
      label: 'Three',
    },
  ]}
  size="regular"
/>
<ButtonGroup
  items={[
    {
      label: 'One',
      onClick: () => {},
    },
    {
      label: 'Two',
      onClick: () => {},
    },
    {
      disabled: true,
      label: 'Three',
    },
  ]}
  size="large"
/>
<ButtonGroup
  items={[
    {
      label: 'One',
      onClick: () => {},
    },
    {
      label: 'Two',
      onClick: () => {},
    },
    {
      disabled: true,
      label: 'Three',
    },
  ]}
  size="xlarge"
/>
</CodeHighlighter>

# Icons 
<CodeHighlighter source="const items = [{ label: 'One', onClick: onClick, icon: <VisibilityOff /> }, ...]
...
<ButtonGroup items={items}/>" language="javascript"><ButtonGroup
  items={[
    {
      label: 'One',
      onClick: () => {},
      icon: <Icons.VisibilityOff />,
    },
    {
      label: 'Two',
      onClick: () => {},
      icon: <Icons.Visibility />,
    },
    {
      disabled: true,
      label: 'Three',
      icon: <Icons.VisibilityOff />,
    },
  ]}
/>
</CodeHighlighter>


### Properties
<DataTable caption="ButtonGroupItem" data={[
  {
    Name: 'disabled',
    Type: 'boolean',
    Required: 'False',
    Default: false,
    Description: 'Mark the button as disabled/inactive',
  },
  {
    Name: 'icon',
    Type: 'ReactNode',
    Required: 'False',
    Default: '',
    Description: 'Icon to display to the right of text in the button. Accepts any Node but ideally would be an image or svg tag',
  },
  {
    Name: 'label',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'The label to display in the button',
  },
    {
    Name: 'onClick',
    Type: '(FormEvent<HTMLButtonElement>):void',
    Required: 'False',
    Default: '',
    Description: 'The function to call when a user clicks on the button generated for the item',
  },
  ]}  
/>

<DataTable caption="ButtonGroup" data={[
  {
    Name: 'className',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'Custom css class to add to the button element',
  },
  {
    Name: 'items',
    Type: 'ButtonGroupItem[]',
    Required: 'True',
    Default: '',
    Description: 'Details of the buttons to display in the group',
  },
  {
    Name: 'size',
    Type: 'string (small/regular/large/xlarge)',
    Required: 'False',
    Default: 'regular',
    Description: 'The size for the button',
  },
]} />
</Tab>
</TabSet>
