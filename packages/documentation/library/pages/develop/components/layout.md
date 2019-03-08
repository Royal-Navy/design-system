---
title: Layout
description: The Layout component provides structure to NELSON applications.
audience: public
pageClasses: ''
context: 'Component Library'
template: withsidebar
usageExampleType: javascript
usageExample: ''
---

# Overview

The NELSON Toolkit contains support for both horizontal and vertical app layouts. The HTML remains the same, however the direction can be changed via the `.horizontal` and `.vertical` classes.

There are two variations of the `.vertical` app layout. This is to accommodate the two variations of the Masthead Component. If you are using the larger Masthead with tabs, add the `.vertical--tabs` class to the `.rn-layout` component.

```
<div class="rn-layout vertical--tabs">
  <div class="rn-layout__nav">
      <! --  Masthead Content -->  
  </div>
  <div class="rn-layout__app">
      <! --  App Content --> 
  </div>
</div>
```

To change the app into a horizontal layout, change the `.vertical` class to `.horizontal`.

```
<div class="rn-layout horizontal">
  <div class="rn-layout__nav">
    <! --  Sidebar Component -->
  </div>
  <div class="rn-layout__app">
    <! --  App Content -->
  </div>
</div>
```