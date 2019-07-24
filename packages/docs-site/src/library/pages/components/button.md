---
title: Button
description: Buttons are one of the foundational elements of any application.
header: true
---

import { Button, Icons, Tab, TabSet } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import Component from '../../images/components/button/component.svg'
import Anatomy from '../../images/components/button/anatomy.svg'
import Primary from '../../images/components/button/primary.svg'
import PrimaryStates from '../../images/components/button/primary-states.svg'
import PrimaryHierarchy from '../../images/components/button/primary-hierarchy.svg'
import Secondary from '../../images/components/button/secondary.svg'
import SecondaryStates from '../../images/components/button/secondary-states.svg'
import Tertiary from '../../images/components/button/tertiary.svg'
import TertiaryStates from '../../images/components/button/tertiary-states.svg'
import TertiaryHierarchy from '../../images/components/button/tertiary-hierarchy.svg'

# Overview

The Button Component gives users a way to take action in an interface. They are placed throughout UIs and often serve as the main action in a component.

<Component />

![Component]('images/components/button/component.svg')

## Usage
The usage section is a bullet pointed list of scenarios the component should be used in.

<TabSet>
  <Tab title="Design">

Buttons are available in 3 variants - [Primary](#primary), [Secondary](#secondary), and [Tertiary](#tertiary). These variants allow designers to establish [hierarchy](#hierarchy) in interfaces.

### Anatomy
<Anatomy />

1. **Container**. The container element wraps the component.
2. **Label**. Labels describe the button action to the user. If text is not used, an icon should be used in its place.
3. **Icon** (optional). The button component can optionally have icons placed either to the left or right of the label. No more than 1 icon should be used per button.

### Sizing & Spacing
The Button component comes in 4 sizes - small, regular, large, and xLarge.
By default, you should use the regular button - this has been designed to fit the majority of UI use cases. 

For forms, the Large button has been created so it sits at the same height as the [textInput](/components/textInput) component. The small and xLarge buttons are available for specific use cases where the primary/large buttons are unsuitable.

### Hierarchy & Placement
Creating visual hierarchy in your UI is important as it helps the user understand the main actions of your page or component. The Primary, Secondary, and Tertiary buttons have different application use cases, so be sure to read the following sections to understand when to use these variations.

---

### Primary Button

<Primary />

#### Usage
The Primary Button is responsible for the most important action of a particular page.

#### States
Like all variations of the Button component, the Primary Button has 3 states - default, hover, and focus.

<PrimaryStates />

#### Hierarchy & Placement
Avoid using multiple Primary Buttons in the same piece of UI. This can make the main action unclear and confuse users. If you need multiple actions, decide which action is the most important one and make this your Primary Button. All other actions should use Secondary or Tertiary Buttons.

<PrimaryHierarchy />

---

### Secondary Button
<Secondary />

#### Usage
The Secondary Button is a supportive action for a Primary Button. They are not the main action of a section of UI. Their role is to offer users additional actions

#### States
<SecondaryStates />

#### Hierarchy & Placement
You can use multiple Secondary Buttons in the same section of UI. Their unobtrusive nature means they are unlikely to be the main focus for users. However, they are still be present enough for the user to interact with them.

---

### Tertiary Button
The Tertiary Button is a text styled button that has no border or background.
<Tertiary />

#### Usage
Tertiary Buttons are unobtrusive actions that should support Primary or Secondary Buttons. They should not be the main focus of the UI, but should still be easily discoverable by the user. They are best suited to things like Cancel buttons, where the goal is to allow the user to exit a primary or secondary action decision.

#### States
Like all other buttons, Tertiary Buttons have 3 main interactive states:
<TertiaryStates />

#### Hierarchy & Placement
Avoid using multiple Tertiary Buttons next to each other. Their supportive role is best used to undo a Primary or Secondary action.

<TertiaryHierarchy />

</Tab>

<Tab title="Develop">

Buttons are implemented as a simple component that as a minimum expects its main content (label) to be passed in as a child element along with the action to carry out when the button is clicked. Additional properties allow more custom styling of the button.

### Basic Usage

<CodeHighlighter source="<Button onClick={onClickHandler}>Click me</Button>" language="javascript">
  <Button onClick={() => {}}>Click me</Button>
</CodeHighlighter>

### Variants
A button can be one of 3 variants to indicate it's importance and role on a page: primary, secondary or tertiary. There is a further variation allowed to indicate if a button is associated with an action that is dangerous, such as deleting a record.

<CodeHighlighter 
source={`<Button onClick={action} variant="primary">Primary</Button>
<Button onClick{action} variant="secondary">Secondary</Button>
<Button onClick{action} variant="tertiary">Tertiary</Button>

<Button onClick={action} variant="primary" color="danger">Primary</Button>
<Button onClick{action} variant="secondary" color="danger">Secondary</Button>
<Button onClick{action} variant="tertiary" color="danger">Tertiary</Button>
`} language="javascript"
>
  <p>
    <Button onClick={()=>{}} variant="primary">Primary</Button>
    <Button onClick={()=>{}} variant="secondary">Secondary</Button>
    <Button onClick={()=>{}} variant="tertiary">Tertiary</Button>
  </p>
  <p>
    <Button onClick={()=>{}} variant="primary" color="danger">Primary</Button>
    <Button onClick={()=>{}} variant="secondary" color="danger">Secondary</Button>
    <Button onClick={()=>{}} variant="tertiary" color="danger">Tertiary</Button>
  </p>
</CodeHighlighter>

### Sizes
Buttons can be rendered in 4 different size variants.

<CodeHighlighter source={`<Button onClick={action} variant="primary" size="small">Small</Button>
<Button onClick={action} variant="primary" size="regular">Regular</Button>
<Button onClick={action} variant="primary" size="large">Large</Button>
<Button onClick={action} variant="primary" size="xlarge">xLarge</Button>
`} language="javascript"
>
  <Button onClick={()=>{}} variant="primary" size="small">Small</Button>
  <Button onClick={()=>{}} variant="primary" size="regular">Regular</Button>
  <Button onClick={()=>{}} variant="primary" size="large">Large</Button>
  <Button onClick={()=>{}} variant="primary" size="xlarge">xLarge</Button>
</CodeHighlighter>


### Icons
Icons can be added to a button and currently can only be shown to the right of the label. Icons should take the form of an SVG component.

<CodeHighlighter 
source={`<Button onClick={action} icon={<TriangleDown />}>Closed</Button>
<Button onClick={action} icon={<TriangleUp />}>Open</Button>
`} language="javascript"
>
  <Button onClick={()=>{}} icon={<Icons.TriangleDown />}>Closed</Button>
  <Button onClick={()=>{}} icon={<Icons.TriangleUp />}>Open</Button>
</CodeHighlighter>

### Properties
<DataTable data={[
  {
    Name: 'children',
    Type: 'ReactNode',
    Required: 'True',
    Default: '',
    Description: 'The content to place in the button, typically text',
  },
  {
    Name: 'className',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'Custom css class to add to the button element',
  },
  {
    Name: 'color',
    Type: 'string (danger)',
    Required: 'False',
    Default: '',
    Description: ' An alternative color style to use, danger is the only alternative currently supported',
  },
  {
    Name: 'icon',
    Type: 'ReactNode',
    Required: 'False',
    Default: '',
    Description: 'Icon to display to the right of text in the button. Accepts any Node but ideally would be an image or svg tag',
  },
  {
    Name: 'onClick',
    Type: '(event: React.SyntheticEvent):void',
    Required: 'True',
    Default: '',
    Description: 'Function to call when a user clicks on a button',
  },
  {
    Name: 'size',
    Type: 'string (small/regular/large/xlarge)',
    Required: 'False',
    Default: 'regular',
    Description: 'The size for the button',
  },
  {
    Name: 'variant',
    Type: 'string (primary/secondary/tertiary)',
    Required: 'False',
    Default: 'tertiary',
    Description: 'The style of button',
  },
]} />

</Tab>
</TabSet>
