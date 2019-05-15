---
title: Lists
description: Lists are a great way to display grouped items.
audience: public
pageClasses: ''
context: 'Component Library'
template: withsidebar
usageExampleType: javascript
usageExample: Import { ICON_NAME } from '@NELSON/Icons'
---

# Basic Example

```html
  <rn-list>
    <rn-list-item>
      <span>List Item 1</span>
    </rn-list-item>
    <rn-list-item>List Item 2</rn-list-item>
    <rn-list-item>List Item 3</rn-list-item>
    <rn-list-item>List Item 4</rn-list-item>
  </rn-list>
```

#### Props

Prop Name     | Value      | Required
------------- | ---------- | --------
**listItems** | `{Array}`  | false

An array of list items can be passe to an `rn-list` component, or you can mantually write out each list item instead.


#### Storybook

To view all the variations of this component, including interactive examples, please visit our [Storybook](https://react-storybook.royalnavy.io/?selectedKind=List&full=0&addons=0&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel&show-info=0&source=0).