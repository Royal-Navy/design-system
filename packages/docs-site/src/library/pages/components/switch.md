---
title: Switch
description: Switch lets users select a value from a number of options.
header: true
---

import SwitchComponent from '../../images/components/switch/Component'
import SwitchAnatomy from '../../images/components/switch/Anatomy'
import SwitchStates from '../../images/components/switch/States'

import Bucket from '../../../components/presenters/bucket'

<div className="bucket__container">
  <Bucket type="sketch" url="https://docs.royalnavy.io/design-system.sketch" />
  <Bucket type="storybook" url="https://storybook.royalnavy.io/?path=/docs/switch--default" />
</div>

# Overview

<SwitchComponent />

## Usage
With regards to behaviour, a switch can be thought of like a radio field, allowing a single choice from a small number of options. The difference between a switch and radio is presentation - a switch looks similar to a button group. Try to limit the number of items that appear in the Switch. This prevents the Switch breaking on smaller screens and doesn't overwhelm the user with the number of options available. If you require the user to pick an item from a number of options, the [Select Component](/components/select) may be a better approach.

### Anatomy

<SwitchAnatomy />

1. **Container**. This wraps the Switch component. On Mobile, this transforms into a Select component, changing the visual appearance of the side-by-side options.
2. **Selected Item**. The Selected value has a blue border around it to signify to the user the selected option.
3. **Unselected Item**. This is the default look of the Switch item.
4. **Label (Optional)**. A label can be provided to describe the function of the Switch component.

### States

<SwitchStates />

The Switch component acts the same as a group of Radio Buttons. Each Switch Item has its own state, however making a single Switch Item active will automatically deselect the rest of the Items.

### Hierarchy & Placement

The Switch component can be used wherever a Radio selection is needed. It can be used within a form, or as a standalone component (For example, changing the view of a calendar between Day/Week/Month/Year).
