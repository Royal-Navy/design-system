---
title: Checkbox Enhanced
description: An enhanced version of the Checkbox with space for custom content.
header: true
---

import CheckboxEnhancedComponent from '../../images/components/forms/checkbox-enhanced/Component'
import CheckboxEnhancedAnatomy from '../../images/components/forms/checkbox-enhanced/Anatomy'
import CheckboxEnhancedStates from '../../images/components/forms/checkbox-enhanced/States'
import CheckboxEnhancedVariation from '../../images/components/forms/checkbox-enhanced/Variation'

import Bucket from '../../../components/presenters/bucket'

<div className="bucket__container">
  <Bucket type="sketch" url="https://docs.royalnavy.io/design-system.sketch" />
  <Bucket type="storybook" url="https://storybook.royalnavy.io/?path=/docs/checkbox-enhanced--default" />
</div>

# Overview
The Checkbox has an enhanced version (`CheckboxEnhanced`) when a label isn’t sufficient by itself. This button provides a space for a description or custom content. It is wrapped in a frame to highlight its clickable region. 

<CheckboxEnhancedComponent />

## Usage
The `CheckboxEnhanced` component allows the active selection of one input at a time. It typically appears in forms and modals. If you require the user to select single options, then the [RadioEnhanced component](/forms/radio-enhanced) should be used instead.

### Anatomy

<CheckboxEnhancedAnatomy />

1. **Frame**. Wraps the component, highlighting when hovered.
1. **Checkbox**. A single value toggle.
1. **Title**. Provides context to the Checkbox.
2. **Description (Optional)**. Additional information.


### States

<CheckboxEnhancedStates />

The enhanced version of the Checkbox has three states - `Default`, `Hover`/`Active`, and `Checked`.


### Variations

<CheckboxEnhancedVariation />

The Enhanced Checkbox has a variation where custom content can be added in place of its description. The Checkbox and Title must remain in the component so the user knows what to expect with its functionality.
