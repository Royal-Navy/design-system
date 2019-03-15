---
title: Alerts
description: Alerts provide an easy to deliver messages to the user.
audience: public
pageClasses: ''
context: 'Component Library'
template: withsidebar
usageExampleType: javascript
usageExample: Import RnAlert from '@NELSON/Icons'
---

# Overview

Alerts are concise components draw the user's attention to important information. They also provide feedback to actions the user has performed.

```html
  <div class="rn-alert">
    <p class="rn-alert__message">This is an example alert message</p>
  </div>
```

## Title

An optional title can be added to the alert.

```html
  <div class="rn-alert">
    <h4 class="rn-alert__title">Alert Title</h4>
    <p class="rn-alert__message">This is an example alert message</p>
  </div>
```

# Event Alerts

Event alerts are small indicators that provide feedback to the user.

```html
  <div class="rn-alert--event">
    This is an Event Alert
  </div>
```

#### Props

Prop Name | Value | Required
--------- | ----- | --------
**title** | `{String}` | false
**state** | `default` `success` `info` `danger` | false

#### Storybook

To view all the variations of this component, including interactive examples, please visit our [Storybook](https://react-storybook.royalnavy.io/?selectedKind=Alerts&selectedStory=With%title&full=0&addons=0&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel&show-info=0&source=0).
