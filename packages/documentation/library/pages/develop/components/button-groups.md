---
title: Button Groups
description: Group together a series of buttons.
audience: public
pageClasses: ''
context: 'Component Library'
template: withsidebar
usageExampleType: javascript
usageExample: Import RnButton from '@NELSON/RnButton'
---

## Overview

Buttons groups are a handy way to combine multiple buttons together. They are great for action toolbars or pagination.

### Usage

To combine multiple buttons together into a group, simply wrap them in a button group container.

```html
  <div class="rn-btn-group">
    <button className="rn-btn--primary" type="button">
      Button
    </button>
    <button className="rn-btn--primary" type="button">
      Button
    </button>
  </div>
```