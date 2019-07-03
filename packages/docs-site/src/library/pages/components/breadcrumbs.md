---
title: Breadcrumbs
description: The Breadcrumb component is a navigational item
audience: public
pageClasses: ''
---

The Breadcrumb component is a navigational item that allows users to quickly ascend a page tree.

![The Breadcrumb Component](../../images/components/breadcrumb/component.svg)

## Usage
The Breadcrumb component should sit at the top of the viewport. Visit the Design [Hierarchy & Placement](#hierarchy) section for more information.

---

# Design

## Anatomy
![Breadcrumb component anatomy](../../images/components/breadcrumb/anatomy.svg)

1. **Parent Link**. The parent link is a clickable action that will navigate the user to the parent page.
2. **Current Page Label**. The current page is a label displaying the current page title. It is not clickable.

## Sizing & Spacing
The Breadcrumb component has one standard text size. Be careful with horizontal placement however, as the breadcrumb can take up a large amount of real estate displaying all the parent links.

## States
![Breadcrumb component states](../../images/components/breadcrumb/states.svg)
When hovering on a breadcrumb, the active link will change to the primary colour. Every child to the right of the hovered link will fade to help indicate to the user the target page. 

## Hierarchy & Placement
There should only be one Breadcrumb component per page. It should be situated at the top of the viewport and be easily accessible for the user. The component is a top level navigational used to help the user navigate whole pages, rather than a subset section inside another component.

---

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