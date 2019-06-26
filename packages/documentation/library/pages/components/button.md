---
title: Button
description: Buttons are one of the foundational elements of any application.
audience: public
pageClasses: ''
---

<<<<<<< HEAD
The Button Component gives users a way to take action in an interface. They are placed throughout UIs and often serve as the main action in a component.

![The Button Component](../../images/components/button/component.svg)

## Usage
The usage section is a bullet pointed list of scenarios the component should be used in.

---

# Design
Buttons are available in 3 variants - [Primary](#primary), [Secondary](#secondary), and [Tertiary](#tertiary). These variants allow designers to establish [hierarchy](#hierarchy) in interfaces.

## Anatomy
The Anatomy is the breakdown of the component.

![Button Component anatomy](../../images/components/button/anatomy.svg)

1. **Container**. The container element wraps the component.
2. **Label**. Labels describe the button action to the user. If text is not used, an icon should be used in its place.
3. **Icon** (optional). The button component can optionally have icons placed either to the left or right of the label. No more than 1 icon should be used per button.

## Sizing & Spacing
The Button component comes in 4 sizes - small, regular, large, and xLarge.
By default, you should use the regular button - this has been designed to fit the majority of UI use cases. 

For forms, the Large button has been created so it sits at the same height as the [textInput](/components/textInput) component. The small and xLarge buttons are available for specific use cases where the primary/large buttons are unsuitable.

## Hierarchy & Placement
Creating visual hierarchy in your UI is important as it helps the user understand the main actions of your page or component. The Primary, Secondary, and Tertiary buttons have different application use cases, so be sure to read the following sections to understand when to use these variations.

---

### Primary Button

![Primary Button](../../images/components/button/primary.svg)

#### Usage
The Primary Button is responsible for the most important action of a particular page.

#### States
Like all variations of the Button component, the Primary Button has 3 states - default, hover, and focus.
![Primary Button States](../../images/components/button/primary-states.svg)

#### Hierarchy & Placement
Avoid using multiple Primary Buttons in the same piece of UI. This can make the main action unclear and confuse users. If you need multiple actions, decide which action is the most important one and make this your Primary Button. All other actions should use Secondary or Tertiary Buttons.
![Primary Button Hierarchy](../../images/components/button/primary-hierarchy.svg)

---

### Secondary Button
![Secondary Button](../../images/components/button/secondary.svg)

#### Usage
The Secondary Button is a supportive action for a Primary Button. They are not the main action of a section of UI. Their role is to offer users additional actions

#### States
![Secondary Button States](../../images/components/button/secondary-states.svg)

### Hierarchy & Placement
You can use multiple Secondary Buttons in the same section of UI. Their unobtrusive nature means they are unlikely to be the main focus for users. However, they are still be present enough for the user to interact with them.

---

### Tertiary Button
The Tertiary Button is a text styled button that has no border or background.
![Tertiary Button](../../images/components/button/tertiary.svg)

#### Usage
Tertiary Buttons are unobtrusive actions that should support Primary or Sectionday Buttons. They should not be the main focus of the UI, but should still be easily discoverable by the user. They are best suited to things like Cancel buttons, where the goal is to allow the user to exit a primary or secondary action decision.

#### States
Like all other buttons, Tertiary Buttons have 3 main interactive states:
![Tertiary Button States](../../images/components/button/tertiary-states.svg)

#### Hierarchy & Placement
Avoid using multiple Tertiary Buttons next to each other. Their supportive role is best used to undo a Primary or Secondary action.
![Tertiary Button Hierarchy](../../images/components/button/tertiary-hierarchy.svg)


# Develop
Introduction to the development section.

## Installation
To install the COMPONENT_NAME component, first install the Standards Component Library via `npm`.

```
    npm install @royalnavy/react-component-library
```

Then inside your project, explicitly import the component you need:

```
    import { ComponentName } from '@royalnavy/react-component-library'`
```

## Basic Usage

```
    Basic HTML for the component is placed here.
```

---

### Variation [ Repeatable ] 
Introduction to the component variation. For each sub heading, outline any differences between the default component and this variation. 

### Usage

```
    Code block for differing HTML
```

# Properties
This section contains specific properties for the component.

| Name      | Type   | Required | Default  | Description  |
-----------------------------------------------------------
| className | String | True     |          |              |

---

### Adornment [ Repeatable ]
Much like the design section, the Adornment block is a repeatable section, outlining any Adornments a component may have and how to apply them.

[ Image / interactive example of Component ]

#### Usage

```
    Code block for Adornment
```

# Properties
This section contains specific properties for the adornment.

| Name         | Type    | Required  | Default  | Description  |
----------------------------------------------------------------
| className    | String  | True      |          |              |

---

## Style Hooks

The following CSS classes are used to style the COMPONENT_NAME component. Use these classes to hook into the component if you need to override specific properties.

| CSS Class  | Required  | Description      |
---------------------------------------------
| .class     | True      | The main styles  |


# Properties
This section contains all available props for the component.

| Name       | Type     | Required  | Default  | Description  |
---------------------------------------------------------------
| className  | String   | True      |          |              |
=======
<!--
Imports are relative from within the docs-site codebase (post-import).
Imports must be included below any Front Matter.
-->
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import DataTable from '../../../components/presenters/data-table'

# Overview
>>>>>>> Add imports for presentational components



#### Storybook

To view all the variations of this component, including interactive examples, please visit our [Storybook](https://react-storybook.royalnavy.io/?selectedKind=buttons&full=0&addons=0&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel&show-info=0&source=0).
