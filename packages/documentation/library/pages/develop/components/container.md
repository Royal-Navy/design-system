---
title: Container
description: The Container Component provides structure and grouping to NELSON components.
audience: public
pageClasses: ''
context: 'Component Library'
template: withsidebar
usageExampleType: javascript
usageExample: ''
---

# Overview

The Container Component wraps sub providing horizontal padding to help separate components.

# Sizing

## Default

By default, the provided horizontal spacing is `40px`.

## Small

To decrease the horizontal padding, the `.small` class is provided, reducing the value to `20px`.

```html
  <div class="rn-container small">
    <!-- Content -->
  </div>
```

## Large

Adding a class of `.large` will increase the horizontal padding to `80px`.

```html
  <div class="rn-container large">
    <!-- Content -->
  </div>
```

## Flush

Sometimes, you will require a container with no horizontal padding. Using the `.flush` class will achieve this.

```html
  <div class="rn-container flush">
    <!-- Content -->
  </div>
```

# Centred

Larger screen sizes may often be too wide for certain applications. Adding `.centred` to the container will centre the component above `1600px`.

```html
  <div class="rn-container centred">
    <!-- Content -->
  </div>
```