---
title: Select
description: A form component used to allow the user to pick a value from a list
header: true
---

import SelectComponent from '../../images/components/forms/select/Component'
import SelectAnatomy from '../../images/components/forms/select/Anatomy'
import SelectStates from '../../images/components/forms/select/States'

import Bucket from '../../../components/presenters/bucket'

<div className="bucket__container">
  <Bucket type="sketch" url="https://docs.royalnavy.io/design-system.sketch" />
  <Bucket type="storybook" url="https://storybook.royalnavy.io/?path=/docs/select--default" />
</div>

# Select
A form component used to allow the user to pick a value from a list
<SelectComponent />

## Usage
The Select input is useful when the user needs to select an option from a long list, typically more than seven options. Users can click on a control to let the list drop down and the user can then scroll through and pick the desired option. Alternatively the control lets a user select the field and start typing and the list of options will appear and is filtered by the value the user has typed.

### Anatomy
<SelectAnatomy />

1. **Container**. The Container wraps the entire component. When the Select is focused, the sheet expands from the bottom of the Select, covering any content immediately below the Select component.
2. **Label**. The label provides context to the options available in the Select.
3. **Value**. The Value is the currently selected Item from the Sheet.
4. **Sheet**. By default, the Sheet is hidden. When the Select is in a focused state, the Sheet will appear with the list of Select items available. It can only display a maximum of five items before it scrolls.
5. **Item**. An Item in the Sheet can be selected by the user. When the user clicks on the item, the sheet collapses and changes the Value to the selected Item.
6. **Item Active**. When the user opens the Sheet again, the last selected Item will be highlighted.

### States
<SelectStates />

The Select component and the Select Item sub component both have two states - Default and Active.
