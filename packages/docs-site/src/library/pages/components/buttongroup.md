---
title: Button Group
description: A collection of buttons commonly used to select an option
header: true
---

import { IconFileDownload, IconAccessAlarm, IconAccessTime } from '@royalnavy/icon-library'
import { ButtonGroup, ButtonGroupItem, Icons, Tab, TabSet } from '@royalnavy/react-component-library'
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

<SketchWidget name="Button group" href="/design-system.sketch" />

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

<CodeHighlighter source={`
<ButtonGroup>
  <ButtonGroupItem onClick={/* handle click */}>One</ButtonGroupItem>
  <ButtonGroupItem>Two</ButtonGroupItem>
  <ButtonGroupItem>Three</ButtonGroupItem>
</ButtonGroup>
`} language="javascript">
<ButtonGroup>
  <ButtonGroupItem onClick={() => alert('One clicked')}>One</ButtonGroupItem>
  <ButtonGroupItem onClick={() => alert('One clicked')}>Two</ButtonGroupItem>
  <ButtonGroupItem onClick={() => alert('One clicked')}>Three</ButtonGroupItem>
</ButtonGroup>
</CodeHighlighter>

### Sizes

<CodeHighlighter source={`
<ButtonGroup size="small">
  /* items */
</ButtonGroup>
<ButtonGroup size="regular">
  /* items */
</ButtonGroup>
<ButtonGroup size="large">
  /* items */
</ButtonGroup>
<ButtonGroup size="xlarge">
  /* items */
</ButtonGroup>
`} language="javascript">
<ButtonGroup size="small">
  <ButtonGroupItem>One</ButtonGroupItem>
  <ButtonGroupItem>Two</ButtonGroupItem>
  <ButtonGroupItem>Three</ButtonGroupItem>
</ButtonGroup>
<ButtonGroup size="regular">
  <ButtonGroupItem>One</ButtonGroupItem>
  <ButtonGroupItem>Two</ButtonGroupItem>
  <ButtonGroupItem>Three</ButtonGroupItem>
</ButtonGroup>
<ButtonGroup size="large">
  <ButtonGroupItem>One</ButtonGroupItem>
  <ButtonGroupItem>Two</ButtonGroupItem>
  <ButtonGroupItem>Three</ButtonGroupItem>
</ButtonGroup>
<ButtonGroup size="xlarge">
  <ButtonGroupItem>One</ButtonGroupItem>
  <ButtonGroupItem>Two</ButtonGroupItem>
  <ButtonGroupItem>Three</ButtonGroupItem>
</ButtonGroup>
</CodeHighlighter>

# Icons 

<CodeHighlighter source={`
<ButtonGroup>
  <ButtonGroupItem icon={<IconFileDownload />}>One</ButtonGroupItem>
  <ButtonGroupItem icon={<IconAccessAlarm />}>Two</ButtonGroupItem>
  <ButtonGroupItem icon={<IconAccessTime />}>Three</ButtonGroupItem>
</ButtonGroup>
`} language="javascript">
<ButtonGroup>
  <ButtonGroupItem icon={<IconFileDownload />}>One</ButtonGroupItem>
  <ButtonGroupItem icon={<IconAccessAlarm />}>Two</ButtonGroupItem>
  <ButtonGroupItem icon={<IconAccessTime />}>Three</ButtonGroupItem>
</ButtonGroup>
</CodeHighlighter>


### Properties
<DataTable caption="ButtonGroup" data={[
  {
    Name: 'children',
    Type: 'React.ReactElement<ButtonGroupItemProps>[]',
    Required: 'True',
    Default: '',
    Description: 'Buttons to be displayed in the group',
  },
  {
    Name: 'className',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'Custom CSS class to add to the button group',
  },
  {
    Name: 'size',
    Type: 'string (small/regular/large/xlarge)',
    Required: 'False',
    Default: 'regular',
    Description: 'The size for the buttons',
  },
]} />

<DataTable caption="ButtonGroupItem" data={[
  {
    Name: 'children',
    Type: 'sting',
    Required: 'True',
    Default: '',
    Description: 'Text to be displayed on the button',
  },
  {
    Name: 'isDisabled',
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
    Description: 'Icon to display to the right of text in the button. Accepts any Node but ideally would be an image or SVG tag',
  },
  {
    Name: 'onClick',
    Type: '(FormEvent<HTMLButtonElement>):void',
    Required: 'False',
    Default: '',
    Description: 'The function to call when a user clicks on the button generated for the item',
  },
]} />


</Tab>
</TabSet>
