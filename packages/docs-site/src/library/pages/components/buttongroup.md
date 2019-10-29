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

A ButtonGroup is a simple wrapper component that is designed to group buttons together into a common component. The ButtonGroup component itself accept no properties, only content which should consist of a collection of buttons.

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
source={`<ButtonGroup>
<Button onClick={action} variant="primary">Primary</Button>
<Button onClick={action} variant="secondary">Secondary</Button>
<Button onClick={action} variant="tertiary">Tertiary</Button>

<Button onClick={action} variant="primary" color="danger">Primary</Button>
<Button onClick={action} variant="secondary" color="danger">Secondary</Button>
<Button onClick={action} variant="tertiary" color="danger">Tertiary</Button>
</ButtonGroup>
`} language="javascript"
>
  <ButtonGroup>
    <Button onClick={()=>{}} variant="primary">Primary</Button>
    <Button onClick={()=>{}} variant="secondary">Secondary</Button>
    <Button onClick={()=>{}} variant="tertiary">Tertiary</Button>
  </ButtonGroup>
  <ButtonGroup>
    <Button onClick={()=>{}} variant="primary" color="danger">Primary</Button>
    <Button onClick={()=>{}} variant="secondary" color="danger">Secondary</Button>
    <Button onClick={()=>{}} variant="tertiary" color="danger">Tertiary</Button>
  </ButtonGroup>
</CodeHighlighter>

### Sizes
Buttons can be rendered in four different size variants.

<CodeHighlighter source={`<ButtonGroup>
  <Button
    onClick={()=>{}}
    variant="primary"
    size="small"
  >
    Primary
  </Button>
  <Button
    onClick={()=>{}}
    variant="secondary"
    color="danger"
    size="small"
  >
    Secondary
  </Button>
  <Button
    onClick={()=>{}}
    variant="tertiary"
    size="small"
  >
    Tertiary
  </Button>
</ButtonGroup>

<ButtonGroup>
  <Button
    onClick={()=>{}}
    variant="primary"
    size="regular"
  >
    Primary
  </Button>
  <Button
    onClick={()=>{}}
    variant="secondary"
    color="danger"
    size="regular"
  >
    Secondary
  </Button>
  <Button
    onClick={()=>{}}
    variant="tertiary"
    size="regular"
  >
    Tertiary
  </Button>
</ButtonGroup>

<ButtonGroup>
  <Button
    onClick={()=>{}}
    variant="primary"
    size="large"
  >
    Primary
  </Button>
  <Button
    onClick={()=>{}}
    variant="secondary"
    color="danger"
    size="large"
  >
    Secondary
  </Button>
  <Button
    onClick={()=>{}}
    variant="tertiary"
    size="large"
  >
    Tertiary
  </Button>
</ButtonGroup>

<ButtonGroup>
  <Button
    onClick={()=>{}}
    variant="primary"
    size="xlarge"
  >
    Primary
  </Button>
  <Button
    onClick={()=>{}}
    variant="secondary"
    color="danger"
    size="xlarge"
  >
    Secondary
  </Button>
  <Button
    onClick={()=>{}}
    variant="tertiary"
    size="xlarge"
  >
    Tertiary
  </Button>
</ButtonGroup>
`} language="javascript"
>
<ButtonGroup>
  <Button
    onClick={()=>{}}
    variant="primary"
    size="small"
  >
    Primary
  </Button>
  <Button
    onClick={()=>{}}
    variant="secondary"
    color="danger"
    size="small"
  >
    Secondary
  </Button>
  <Button
    onClick={()=>{}}
    variant="tertiary"
    size="small"
  >
    Tertiary
  </Button>
</ButtonGroup>

<ButtonGroup>
  <Button
    onClick={()=>{}}
    variant="primary"
    size="regular"
  >
    Primary
  </Button>
  <Button
    onClick={()=>{}}
    variant="secondary"
    color="danger"
    size="regular"
  >
    Secondary
  </Button>
  <Button
    onClick={()=>{}}
    variant="tertiary"
    size="regular"
  >
    Tertiary
  </Button>
</ButtonGroup>

<ButtonGroup>
  <Button
    onClick={()=>{}}
    variant="primary"
    size="large"
  >
    Primary
  </Button>
  <Button
    onClick={()=>{}}
    variant="secondary"
    color="danger"
    size="large"
  >
    Secondary
  </Button>
  <Button
    onClick={()=>{}}
    variant="tertiary"
    size="large"
  >
    Tertiary
  </Button>
</ButtonGroup>

<ButtonGroup>
  <Button
    onClick={()=>{}}
    variant="primary"
    size="xlarge"
  >
    Primary
  </Button>
  <Button
    onClick={()=>{}}
    variant="secondary"
    color="danger"
    size="xlarge"
  >
    Secondary
  </Button>
  <Button
    onClick={()=>{}}
    variant="tertiary"
    size="xlarge"
  >
    Tertiary
  </Button>
</ButtonGroup>
</CodeHighlighter>


### Icons
Icons can be added to a button and currently can only be shown to the right of the label. Icons should take the form of an SVG component.

<CodeHighlighter 
source={`<ButtonGroup>
<Button onClick={action} icon={<TriangleDown />}>Closed</Button>
<Button onClick={action} icon={<TriangleUp />}>Open</Button>
</ButtonGroup>
`} language="javascript"
>
<ButtonGroup>
  <Button onClick={()=>{}} icon={<Icons.TriangleDown />}>Closed</Button>
  <Button onClick={()=>{}} icon={<Icons.TriangleUp />}>Open</Button>
</ButtonGroup>
</CodeHighlighter>

</Tab>
</TabSet>
