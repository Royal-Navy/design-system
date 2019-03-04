---
title: Clearfix Helpers
description: CSS Framework provides a mixin and helper class to clear floats.
audience: public
pageClasses: ''
context: 'CSS Framework Helpers'
template: withsidebar
usageExampleType: CSS
usageExample: '@import "~bedrock/bedrock";'
---

### Clearfix Helper Class

```scss
  .h_cf {
    &::after {
      content: "";
      display: table;
    }
  }
```

### Clearfix Mixin

```scss
  @include clearfix;
```
