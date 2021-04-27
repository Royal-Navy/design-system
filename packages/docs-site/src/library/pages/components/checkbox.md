---
title: Checkbox
description: Checkboxes let users select multiple options at once.
header: true
---

import CheckboxComponent from '../../images/components/forms/checkbox/Component'
import CheckboxAnatomy from '../../images/components/forms/checkbox/Anatomy'
import CheckboxStates from '../../images/components/forms/checkbox/States'

import Bucket from '../../../components/presenters/bucket'

<div className="bucket__container">
  <Bucket type="sketch" url="https://docs.royalnavy.io/design-system.sketch" />
  <Bucket type="storybook" url="https://storybook.royalnavy.io/?path=/docs/checkbox--default" />
</div>

# Checkbox
Checkboxes let users select multiple options at once.

<CheckboxComponent />

## Usage
The checkbox component allows the active selection of one or more input values at a time. It typically appears in forms and modals. If you require the user to select a single option from a series of items, then the [Radio Button component](/forms/radio) should be used instead.

### Anatomy
<CheckboxAnatomy />

1. **Checkbox Button**. The checkbox is a single value toggle.
2. **Label (Optional)**. Used to provide context to the Checkbox Button.


### States
<CheckboxStates />

The Checkbox Button has three available states - `Default`, `Hover`/`Active`, and `Checked`.
