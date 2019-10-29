---
title: Button Group
description: A collection of buttons commonly used to select an option
header: true
---

import { Button,ButtonGroup,  Icons, Tab, TabSet } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import SketchWidget from '../../../components/presenters/sketch-widget'


# Overview

A Button group is a useful component for grouping together buttons to allow a user to select an option.



## Usage
The usage section is a bullet pointed list of scenarios the component should be used in.

<TabSet>
  <Tab title="Design">

<SketchWidget name="Button group" href="/standards-toolkit.sketch" />

### Anatomy


### Sizing & Spacing


### Hierarchy & Placement

</Tab>

<Tab title="Develop">

A ButtonGroup accepts an array of button items that provide a label and value for each button. The component then generates a collection of buttons, grouped together, styled similar to a secondary button with a primary hover.

### Basic Usage

<CodeHighlighter source="<ButtonGroup>
<Button onClick={onClickHandler}>Click me</Button>
<Button onClick={onClickHandler}>Or me</Button>
</ButtonGroup>" language="javascript">
<ButtonGroup>
  <Button onClick={() => {}}>Click me</Button>
  <Button onClick={() => {}}>Or me</Button>
</ButtonGroup>
</CodeHighlighter>

### Variants
The ButtonGroup can be used to contain any variation of button.

<CodeHighlighter 
source={`<ButtonGroup
      items={[
        {
          value: 1,
          label: 'One',
        },
        {
          value: 2,
          label: 'Two',
        },
        {
          disabled: true,
          value: 3,
          label: 'Three',
        },
      ]}
      name="sizer"
      onClick={()=>{}}')}
      size="regular"
    />
`} language="javascript"
>
  <ButtonGroup
      items={[
        {
          value: 1,
          label: 'One',
        },
        {
          value: 2,
          label: 'Two',
        },
        {
          disabled: true,
          value: 3,
          label: 'Three',
        },
      ]}
      name="sizer"
      onClick={action('Click button group')}
      size="regular"
    />
</CodeHighlighter>



### Icons
Icons can be added to a button and currently can only be shown to the right of the label. Icons should take the form of an SVG component.


<CodeHighlighter 
source={`
<ButtonGroup
  items={[
    {
      value: 1,
      label: 'One',
    },
    {
      value: 2,
      label: 'Two',
      icon={<TriangleUp />}>
    },
    {
      disabled: true,
      value: 3,
      label: 'Three',
    },
  ]}
  name="sizer"
  onClick={action('Click button group')}
  size="regular"
/>
`} language="javascript"
>
<ButtonGroup
  items={[
    {
      value: 1,
      label: 'One',
    },
    {
      value: 2,
      label: 'Two',
      icon={<TriangleUp />}>
    },
    {
      disabled: true,
      value: 3,
      label: 'Three',
    },
  ]}
  name="sizer"
  onClick={action('Click button group')}
  size="regular"
/>
</CodeHighlighter>


### Properties
<DataTable caption="ButtonGroupItem" data={[
  {
    Name: 'disabled',
    Type: 'boolean,
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
    Name: 'value',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: '',
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
    Name: 'name',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'A name to be included in a call to onClick. Allows 1 handler to handle multiple button groups',
  },
  {
    Name: 'onClick',
    Type: '(event):void',
    Required: 'True',
    Default: '',
    Description: 'Calls the function in a similar manner to an input onChange. Sends an object with a target containing a name and value',
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
