---
title: Dropdown
description: A component to show a list of actions.
header: true
---

import DropdownComponent from '../../images/components/dropdown/Component'
import DropdownAnatomy from '../../images/components/dropdown/Anatomy'
import DropdownStates from '../../images/components/dropdown/States'

import Bucket from '../../../components/presenters/bucket'

<div className="bucket__container">
  <Bucket type="sketch" url="https://docs.royalnavy.io/design-system.sketch" />
  <Bucket type="storybook" url="https://storybook.royalnavy.io/?path=/docs/dropdown--default" />
</div>

# Dropdown
A component to show a list of actions.
<DropdownComponent />

## Usage
The Dropdown input is useful when the user needs to select an option from a long list, typically more than seven options. Users can click on a control to let the list drop down and the user can then scroll through the list and pick the desired option. Alternatively the control lets a user select the field and start typing and the list of options will appear and is filtered by the value the user has typed.

The Dropdown provides a method to hide multiple actions under a single click. They reduce the footprint for secondary actions that do not need to be ever-present in the interface. The Dropdown Label provides context to the grouping of these actions, however they all act independently of each other and do not update the Dropdown Label with the selected value.

The Dropdown Sheet that appears is always a custom sheet that can contain multiple actions. These actions can either navigate a user (e.g. open a new page or modal), or serve as toggle where multiple values can be turned on or off. If the action clicked navigates the user in any way, the Dropdown Sheet is automatically closed. For toggle values, clicking outside the Dropdown Sheet/on the Dropdown itself will close the Dropdown Sheet.

### Anatomy

<DropdownAnatomy />

1. **Container**. The Container wraps the entire component. When the Dropdown is focused, the sheet expands from the bottom of the Dropdown, covering any content immediately below the Dropdown component.
2. **Label**. The label provides context to the options available in the Dropdown.
3. **Icon (Optional)**. The Dropdown label can have an optional Icon associated with it. This helps to provide a visual cue to users as to what the contents of the Dropdown will contain. Unlike Selects, this icon sits within the Dropdown Container, rather than as a pre- or post-fixed label.
4. **Sheet**. By default, the Sheet is hidden. When the Dropdown is in a focused state, the Sheet will appear with the list of Select items available. It can only display a maximum of five items before it scrolls. Unlike the Select, the Dropdown's Sheet is visually separated from the Dropdown Container. This is to help distinguish between the two components and provide hints to the user about the expected behaviour of the component.
5. **Item**. Selecting an item in the sheet has one of two effects. If the Dropdown item is an action, then the Dropdown is automatically closed and the action is fired. If the item is a toggle, then clicking on the item will turn on/off the item. Clicking outside of the Dropdown Sheet, or clicking the Dropdown Container will hide the Sheet.
6. **Item (Hover)**. Hovering on an item in the sheet will add a subtle background to the item.
7. **Item Toggle**. When the item is used as a toggle, clicking it will update the eye icon to the appropriate state.
8. **Context Label**. The Context Label provides additional information to the Dropdown Item. It should be used to convey keyboard shortcuts and similar secondary information.

## States

<DropdownStates />

The Dropdown component has two states - `default` and `active`. The Dropdown Item also has two states - Default and Hover. The Item does not have an active state as the user is not selecting a value but clicking an action like they would a standard (Secondary) button.

### Sizing & Spacing
The Dropdown comes in one size. It has been sized to match Inputs and Regular Buttons correctly. The Width of the Dropdown is dynamic and can be set on each instance. The Sheet will also adapt to the content inside of itself, ensuring content is always correctly sized and presented. 

### Hierarchy & Placement

Dropdowns are a great way to hide multiple actions under a concise block of UI. As [Primary actions](/components/buttons) should be standalone and always present in the UI, the Dropdown should not be used to house these. The Dropdown should contain only Secondary and Tertiary actions that aren't required to be always visible.

If you require the ability to maintain a selection and have its contents appear in the input bar, a [Select Component](/components/forms/select/) should be used instead.
