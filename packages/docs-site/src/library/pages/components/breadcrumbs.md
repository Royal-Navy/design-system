---
title: Breadcrumbs
description: The Breadcrumb Component is a navigational item
audience: public
pageClasses: ''
---

The Breadcrumb Component is a navigational item that allows users to quickly ascend a page tree.

![The Button Component](../../images/components/button/component.svg)

## Usage
The usage section is a bullet pointed list of scenarios the component should be used in.

 ---

# Design
Buttons are available in 3 variants - [Primary](#primary), [Secondary](#secondary), and [Tertiary](#tertiary). These variants allow you to establish [hierarchy](#hierarchy) in your interfaces.

## Anatomy
![Breadcrumb Component anatomy](../../images/components/breadcrumb/anatomy.svg)

1. **Parent Link**. The parent link is a clickable action that will navigate the user to the parent page.
2. **Current Page Label**. The current page is a label displaying the current page title. It is not clickable.

## Sizing & Spacing
The Button component has 4 sizes available to use - small, regular, large, and xLarge.
By default, you should use the regular button - this has been designed to fit the majority of UI use cases. For forms, the Large button has been created so it sits at the same height as the [textInput](/components/textInput) component. The small and xLarge buttons are available for specific use cases where the primary/large buttons are unsuitable.

## States


## Hierarchy & Placement
There should only be one



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



#### Storybook

 To view all the variations of this component, including interactive examples, please visit our [Storybook](https://react-storybook.royalnavy.io/?selectedKind=buttons&full=0&addons=0&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel&show-info=0&source=0).