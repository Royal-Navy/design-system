---
title: Cards
description: Cards provide a way to wrap and contain groups of components.
audience: public
pageClasses: ''
context: 'Component Library'
template: withsidebar
usageExampleType: javascript
usageExample: Import RnAlert from '@NELSON/Icons'
---


# Overview

Cards are flexible content containers, adding visual grouping to sub components.

```html
  <div class="rn-card">
      Card Content
  </div>
```

# Card Body

The Card Body provides a padded section to place your content inside of. The Card component can accept multiple Card Body components - these are visually divided with a border between each body section.

```html
  <div class="rn-card">
    <div class="rn-card__body">
      A Card with Body Content
    </div>
  </div>
```

# Card Header

Add an optional Header within a card.

```html
  <div class="rn-card">
    <div class="rn-card__header">
      Card Header
    </div>
    <div class="rn-card__body">
      A Card with Body Content
    </div>
  </div>
```