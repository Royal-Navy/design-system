---
title: Radio
description: Radios let users select one option at a time.
header: true
---

import RadioComponent from '../../images/components/forms/radio/Component'
import RadioAnatomy from '../../images/components/forms/radio/Anatomy'
import RadioStates from '../../images/components/forms/radio/States'

import Bucket from '../../../components/presenters/bucket'

<div className="bucket__container">
  <Bucket type="sketch" url="https://docs.royalnavy.io/design-system.sketch" />
  <Bucket type="storybook" url="https://storybook.royalnavy.io/?path=/docs/radio--default" />
</div>

# Overview
<RadioComponent />

## Usage
The Radio component allows the active selection of one input at a time. It typically appears in forms and modals. If you require the user to select multiple options, then the [Checkbox component](/forms/checkbox) should be used instead.

### Anatomy
<RadioAnatomy />

1. **Radio Button**. The Radio Button is a single value toggle 
2. **Label (Optional)**. Used to provide context to the Radio Button.

### States
<RadioStates />

The Radio Button has three available states - `Default`, `Hover`/`Active`, and `Checked`.

# Enhanced Radio Button
The Enhanced Radio Button component allows the active selection of one input at a time. It typically appears in forms and modals. If you require the user to select multiple options, then the [CheckboxCard component](/forms/checkbox-card) should be used instead.
