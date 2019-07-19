---
title: Progress
description: Progress bars are a percentage based representation of data.
---

## Basic Usage

Here is the Progress Bar in its basic form. To change the width of the Progress Bar, change the inline style on the `.rn-progress__bar` element.

```html
  <div class="rn-progress">
    <div className="rn-progress__bar" style="width: 40%"></div>
  </div>
```

## State

The Progress Bar is available in the following states: `neutral`, `primary`, `success`, `warning`, and `danger`. Add a class to the `.rn-progress` element to change the state. By default, the `neutral` state is applied.

```html
  <div class="rn-progress danger">
    <div className="rn-progress__bar" style="width: 40%"></div>
  </div>
```

## Sizing

Progress Bars can be given a sizing class to change their height. The classes `.small` and `.large` are available to adjust the component.

```html
  <div class="rn-progress large">
    <div className="rn-progress__bar" style="width: 40%"></div>
  </div>
```

## Labels

Labels can be added to `.large` components, providing immediate feedback to the user. Labels should not be used with the `.small` or `default` progress bars, as the text would be too small to be legible. To create a label, add the text to the `.rn-progress__bar` container.

```html
  <div class="rn-progress neutral large">
    <div className="rn-progress__bar" style="width: 40%">40%</div>
  </div>
```