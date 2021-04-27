---
title: Range Slider
description: Range Slider allows the user to move a 'handle' to select a single value or range.
header: true
---

import RangeSliderComponent from '../../images/components/range-slider/Component'
import RangeSliderAnatomy from '../../images/components/range-slider/Anatomy'
import RangeSliderStates from '../../images/components/range-slider/States'
import RangeSliderVariations from '../../images/components/range-slider/Variations'

import Bucket from '../../../components/presenters/bucket'

<div className="bucket__container">
  <Bucket type="sketch" url="https://docs.royalnavy.io/design-system.sketch" />
  <Bucket type="storybook" url="https://storybook.royalnavy.io/?path=/docs/range-slider--default" />
</div>

# Overview

The Range Slider allows the user to move a 'handle' to select a single value or range.

<RangeSliderComponent />

  
### Anatomy
<RangeSliderAnatomy />

1. **Slider**. This is the main container of the component.
2. **Handle**. Clicking and holding the handle will allow the user to move the range to the value they need. When it is pressed, the current value of the range slider is displayed above the handle.
2. **Icon (optional)**. This is an optional icon that can be added to the slider to give context.

### States

<RangeSliderStates />

The Range Slider has two states - default and active. When the user interacts with the slider, the handle extends a transparent border and displays the current slider value above it.

### Variations

<RangeSliderVariations />

There are two variations to the Range Slider - the Single Handle and the Dual Handle. As the name suggests, the Dual handle adds an extra handle to the slider, allowing the user to select both the top and bottom of the range.
