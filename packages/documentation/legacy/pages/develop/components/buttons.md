---
title: Buttons
description: Buttons are one of the foundational elements of any application.
audience: public
pageClasses: ''
context: 'Component Library'
template: withsidebar
usageExampleType: javascript
usageExample: Import RnButton from '@NELSON/RnButton'
---

# Overview

Buttons are a key component in any application. Establishing hierarchy between actions is crucial to ensuring an interface is easy to understand by a user. In the NELSON component library, we provide 3 tiers of buttons. 

## Primary Buttons

Primary Buttons are used as the main action of a component. We recommend limiting the number of Primary Buttons that are visible at any one time to make it easier to guide a user through the interface.

```html
  <button className="rn-btn--primary" type="button">
    Button
  </button>
```

## Secondary Buttons

Secondary Buttons are used for the main bulk of actions that are _secondary_ to the main action of a component. They are visually muted so as to not draw attention away from the Primary Buttons.

```html
  <button className="rn-btn--secondary" type="button">
    Button
  </button>
```

## Tertiary Buttons

Tertiary Buttons should be used for small, unobtrusive actions, such as a cancel button on a modal. They are styled to look visually similar to links, however are sized to match the Primary and Secondary Buttons.

```html
  <button className="rn-btn--tertiary" type="button">
    Button
  </button>
```

# Overrides

## Sizing

Buttons are available in three different sizes - large, regular, or small. Simply add a class of `.large` or `.small` to the `.rn-btn` element to alter its size.

```html
  <button className="rn-btn--primary small" type="button">
    Button
  </button>
```

## State

By default, a Button Component is presented with the Neutral state. To change the state of a Button, the following state classes are provided: `.primary`, `.success`, `.warning`, and `.danger`.

*Note:* States other than the default Neutral State should be use sparingly.

## Block Buttons

Adding a class of `.block` to a button will make it take up 100% of its parent's width.

## Disabled Buttons

Adding a class of `.disabled` to a button will prevent the button from being clicked and visually fade it out. This is also available through the `:disabled` pseudo class.


#### Storybook

To view all the variations of this component, including interactive examples, please visit our [Storybook](https://react-storybook.royalnavy.io/?selectedKind=buttons&full=0&addons=0&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel&show-info=0&source=0).
