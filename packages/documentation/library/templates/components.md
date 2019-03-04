---
title: [Component Name]
description: [Component Description]
audience: public
pageClasses: ''
template: withsidebar
---

# Introduction

Introduce the component here. State what it is used for and any other information relating to the component.

## Basic Example

The basic example shows the component in it's basic form. If the component has state variation (e.g. Success, Danger etc), then show these here.
Do not include other modifiers - they should have their own dedicated section below this example.

<div class="example">
  <button class="rn-button neutral">Button</button>
</div>
```html
  <button class="rn-button neutral">Button</button>
```

## Class Modifiers [REPEATABLE]

Repeat this section to show other classes that are available to the component - you may show size variations, for example. Always ensure an example and code block of the class being demonstrated are included.

<div class="example">
  <button class="rn-button neutral small">Button</button>
</div>
```html
  <button class="rn-button neutral small">Button</button>
```

---

# React

Show how to import the React component, and the html to implement it.

```js
  @import RNButton from '@Royal-navy/React/RNButton';
  <RNButton state="">Button</RNButton>
```

## Props

Prop Name    | Value           | Required
------------ | --------------- | --------
**initials** | `{String}`      | false
**size**     | `small` `large` | false


## Storybook

To view all the variations of this component, including interactive examples, please visit our [Storybook]().