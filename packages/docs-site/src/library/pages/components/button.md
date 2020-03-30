---
title: Button
description: Buttons are one of the foundational elements of any application.
header: true
---

import { Button, Icons, Tab, TabSet } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import SketchWidget from '../../../components/presenters/sketch-widget'

import ButtonComponent from '../../images/components/button/Component'
import ButtonAnatomy from '../../images/components/button/Anatomy'
import ButtonPrimary from '../../images/components/button/Primary'
import ButtonPrimaryStates from '../../images/components/button/PrimaryStates'
import ButtonPrimaryHierarchy from '../../images/components/button/PrimaryHierarchy'
import ButtonSecondary from '../../images/components/button/Secondary'
import ButtonSecondaryStates from '../../images/components/button/SecondaryStates'
import ButtonTertiary from '../../images/components/button/Tertiary'
import ButtonTertiaryStates from '../../images/components/button/TertiaryStates'
import ButtonTertiaryHierarchy from '../../images/components/button/TertiaryHierarchy'

# Overview

The Button Component gives users a way to take action in an interface. They are placed throughout User Interfaces (UIs) and often serve as the main action in a component.

<ButtonComponent />

## Usage
The usage section is a bullet pointed list of scenarios the component should be used in.

<TabSet>
  <Tab title="Design">

<SketchWidget name="Button" href="/standards-toolkit.sketch" />

Buttons are available in three variants - [Primary](#primary), [Secondary](#secondary), and [Tertiary](#tertiary). These variants allow designers to establish [hierarchy](#hierarchy) in interfaces.

### Anatomy
<ButtonAnatomy />

1. **Container**. This element wraps the component.
2. **Label**. A label describes the button action to the user. If text is not used, an icon should be used in its place.
3. **Icon (optional)**. The button component can have icons placed either to the left or right of the label. No more than one icon should be used per button.

### Sizing & Spacing
The Button component comes in four sizes - small, regular, large, and xLarge.
By default, you should use the regular button - this has been designed to fit the majority of UI use cases. 

For forms, the Large button has been created so it sits at the same height as the [textInput](/components/textInput) component. The small and xLarge buttons are available for specific use cases where the primary/large buttons are unsuitable.

### Hierarchy & Placement
Creating visual hierarchy in your UI is important as it helps the user to understand the main actions of your page. The Primary, Secondary, and Tertiary buttons have different application use cases, so be sure to read the following sections to understand when to use these variations.

---

### Primary Button

<ButtonPrimary />

#### Usage
The Primary Button is responsible for the most important action of a particular page.

#### States
Like all variations of the Button component, the Primary Button has four states - `default`, `hover`, and `focus`.

<ButtonPrimaryStates />

#### Hierarchy & Placement
Avoid using multiple Primary Buttons in the same block of user interface (UI). This can make the main action unclear and confuse users. If you need multiple actions, decide which action is the most important one and make this your Primary Button. All other actions should use Secondary or Tertiary Buttons.

<ButtonPrimaryHierarchy />

---

### Secondary Button
<ButtonSecondary />

#### Usage
The Secondary Button is a supportive action for a Primary Button. They are not the main action of a section of UI. Their role is to offer users additional actions.

#### States
<ButtonSecondaryStates />

#### Hierarchy & Placement
You can use multiple Secondary Buttons in the same section of UI. Their unobtrusive nature means they are unlikely to be the main focus for users. However, they are still present enough for the user to interact with them.

---

### Tertiary Button
The Tertiary Button is a text styled button that has no border or background.
<ButtonTertiary />

#### Usage
Tertiary Buttons are unobtrusive actions that should support Primary or Secondary Buttons. They should not be the main focus of the UI, but should still be easily discoverable by the user. They are best suited to things like Cancel buttons, where the goal is to allow the user to exit a Primary or Secondary action decision.

#### States
Like all other buttons, Tertiary Buttons have three main interactive states:
<ButtonTertiaryStates />

#### Hierarchy & Placement
Avoid using multiple Tertiary Buttons next to each other. Their supportive role is best used to undo a Primary or Secondary action.

<ButtonTertiaryHierarchy />

</Tab>

<Tab title="Develop">

Buttons are implemented as a simple component that as a minimum expects its main content (label) to be passed in as a child element, along with the action to carry out when the button is clicked. Additional properties allow more custom styling of the button.

### Basic Usage

<CodeHighlighter source="<Button onClick={onClickHandler}>Click me</Button>" language="javascript">
  <Button onClick={() => {}}>Click me</Button>
</CodeHighlighter>

### Variants
A button can be one of three variants to indicate its importance and role on a page: Primary, Secondary or Tertiary. There is a further variation allowed to indicate if a button is associated with an action that is dangerous, such as deleting a record.

<CodeHighlighter 
source={`<Button onClick={action} variant="primary">Primary</Button>
<Button onClick={action} variant="secondary">Secondary</Button>
<Button onClick={action} variant="tertiary">Tertiary</Button>

<Button onClick={action} variant="primary" color="danger">Primary</Button>
<Button onClick={action} variant="secondary" color="danger">Secondary</Button>
<Button onClick={action} variant="tertiary" color="danger">Tertiary</Button>
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
Buttons can be rendered in three different size variants.

<CodeHighlighter source={`<Button onClick={action} variant="primary" size="small">Small</Button>
<Button onClick={action} variant="primary" size="regular">Regular</Button>
<Button onClick={action} variant="primary" size="large">Large</Button>
`} language="javascript"
>
  <Button onClick={()=>{}} variant="primary" size="small">Small</Button>
  <Button onClick={()=>{}} variant="primary" size="regular">Regular</Button>
  <Button onClick={()=>{}} variant="primary" size="large">Large</Button>
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
    Description: 'An alternative color style to use, danger is the only alternative currently supported',
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
    Description: 'Icon to display to the right of text in the button. Accepts any Node but ideally would be an image or svg tag',
  },
  {
    Name: 'iconPlacement',
    Type: 'string (left/right)',
    Required: 'False',
    Default: 'right',
    Description: 'This specifies which side of the button text the icon should be rendered',
  },
  {
    Name: 'onClick',
    Type: '(event: React.SyntheticEvent):void',
    Required: 'False',
    Default: '',
    Description: 'Function to call when a user clicks on a button',
  },
  {
    Name: 'size',
    Type: 'string (small/regular/large)',
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
