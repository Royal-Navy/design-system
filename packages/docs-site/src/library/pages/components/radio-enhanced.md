---
title: Radio Enhanced
description: An enhanced version of the Radio Button with space for custom content.
header: true
---

import RadioEnhancedComponent from '../../images/components/forms/radio-enhanced/Component'
import RadioEnhancedAnatomy from '../../images/components/forms/radio-enhanced/Anatomy'
import RadioEnhancedStates from '../../images/components/forms/radio-enhanced/States'
import RadioEnhancedVariation from '../../images/components/forms/radio-enhanced/Variation'

import Bucket from '../../../components/presenters/bucket'

<div className="bucket__container">
  <Bucket type="sketch" url="https://docs.royalnavy.io/design-system.sketch" />
  <Bucket type="storybook" url="https://storybook.royalnavy.io/?path=/docs/radio-enhanced--default" />
</div>

# Overview
The Radio Button has an enhanced version (`RadioEnhanced`) when a label isn't sufficient by itself. This button provides a space for a description or custom content. It is wrapped in a frame to highlight its clickable region. 

<RadioEnhancedComponent />

## Usage
The `RadioEnhanced` component allows the active selection of one input at a time. It typically appears in forms and modals. If you require the user to select multiple options, then the [CheckboxEnhanced component](/forms/checkbox-enhanced) should be used instead.

### Anatomy
<RadioEnhancedAnatomy />

1. **Frame**. Wraps the component, highlighting when hovered.
1. **Radio Button**. A single value toggle.
1. **Title**. Provides context to the Radio Button.
2. **Description (Optional)**. Additional information.

### States
<RadioEnhancedStates />

The enhanced version of the Radio Button has three states - `Default`, `Hover`/`Active`, and `Checked`.


### Variations
<RadioEnhancedVariation />

The Enhanced Radio Button has a variation where custom content can be added in place of its description. The Radio button and Title must remain in the component so the user knows what to expect with its functionality.
