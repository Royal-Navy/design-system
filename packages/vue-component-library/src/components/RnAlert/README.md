---
title: Alert
description: Alerts provide an easy to deliver messages to the user.
---

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