---
title: Navs
description: Navs are an easy way to organise links
audience: public
pageClasses: ''
context: 'Component Library'
template: withsidebar
usageExampleType: javascript
usageExample: Import { ICON_NAME } from '@NELSON/Icons'
---

# Basic Example

```html
  <rn-nav alignment="stretch" orientation="vertical" :navItems="navItems"/>
```

#### Props

##### Nav

Prop Name       | Value                    | Required
-------------   | ------------------------ | --------
**navItems**    | `{Array}`                | Yes
**alignment**   | `stretch`                | false
**orientation** | `horizontal` `vertical`  | false

##### Nav Item

Prop Name     | Value      | Required
------------- | ---------- | --------
**url**       | `{String}` | Yes
**label**     | `{String}` | Yes

#### Storybook

To view all the variations of this component, including interactive examples, please visit our [Storybook]().
