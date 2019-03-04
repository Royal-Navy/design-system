---
title: Dropdowns
description: Dropdowns hide multiple options behind a concise button UI.
audience: public
pageClasses: ''
context: 'Component Library'
template: withsidebar
usageExampleType: javascript
usageExample: Import { RNDropdown } from '@RoyalNavy/react-component-library'
---

## Overview

Dropdowns are toggleable, contextual overlays for displaying lists of links and actions. They should be used to hide secondary actions a component, and not to capture an option selection in a Form. If you are looking for elements to use within a Form context, please visit the [Selects](/Develop/Components/Selects) documentation.

Dropdowns are activated by clicking. Hover effects should be reserved for providing the user with additional information & links (for example, [Tooltips](/Develop/Components/Tooltips)), as having hover effects on actions often results in users causing them to unintentionally fire.

## Basic Example


```html
  <div class="rn-dropdown" role="listbox">
    <button type="button" class="rn-dropdown__button">
      <span>Dropdown</span>
      <svg class="h_ml-10 rn-dropdown__arrow" xmlns="http://www.w3.org/2000/svg" width="11" height="7">    
        <path fill="currentColor" fill-rule="evenodd" d="M5.66 4.49L9.19.95a1 1 0 1 1 1.42 1.41L6.36 6.61a1 1 0 0 1-1.41 0L.71 2.36A1 1 0 1 1 2.12.95l3.54 3.54z"></path>
      </svg>
    </button>
    <div class="rn-dropdown__sheet">
      <div class="rn-dropdown__option" role="option" aria-selected="false" tabindex="0">
        <span class="rn-dropdown__option__label">Item</span>
        <span class="rn-dropdown__option__helper">Helper</span>
      </div>
    </div>
  </div>
```


### Sizing

To keep consistency in sizing, Dropdown buttons have been sized to match regular [Buttons](/develop/components/buttons). Simply add a class of `.large` or `.small` to the `.rn-dropdown` element to alter its appearance. *Note:* This does not affect the size of the dropdown sheet.


# React Component

If you are building your NELSON application in React, implementing the Dropdown component is considerably more straightforward. Firstly, import the component from our React package:
```
  @import { RNDropdown } from '@RoyalNavy/react-component-library'
```

Next, include the component in the location where you want it to be rendered. All available props are listed in the Props section below the example.

```html
  <RNDropdown
    options={options}
    onChange={value => {
      action(`Select ${value}`)
    }}
    label="Dropdown"
    size="regular"
  />
```

#### Props

Prop Name     | Values                    | Required
------------- | ------------------------- | --------
**Label**     | `{String}`                | true
**onChange**  | `{Function}`              | true
**options**   | `{Object}`                | true
**size**      | `small` `regular` `large` | false


#### Storybook

To view all the variations of this component, including interactive examples, please visit our [Storybook]().
