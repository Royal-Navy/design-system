---
title: Number Input
description: The Number Input is an Input component. It only accepts numbers that can be stepped with the additional arrows.
header: true
---

import NumberClickerComponent from '../../images/components/forms/number-clicker/Component'
import NumberClickerAnatomy from '../../images/components/forms/number-clicker/Anatomy'
import NumberClickerStates from '../../images/components/forms/number-clicker/States'
import NumberClickerButtonStates from '../../images/components/forms/number-clicker/ButtonStates'

import Bucket from '../../../components/presenters/bucket'

<div className="bucket__container">
  <Bucket type="sketch" url="https://docs.royalnavy.io/design-system.sketch" />
  <Bucket type="storybook" url="https://storybook.royalnavy.io/?path=/docs/number-input--default" />
</div>

# Overview
The Number Input component is a field input that only accepts numbers and can be stepped with the additional arrows.

<NumberClickerComponent />

## Usage
The Number Input allows the user to step between predetermined values. They can also manually enter a number into the input. 

The Number Input should stand out and be easily discoverable by users. The text label should be concise, effectively communicating to the user the range or value required.

### Anatomy
<NumberClickerAnatomy /> 

1. **Label**. The Label should be used to describe to the user what the desired input should be. Every field should have a text label. The label should always be visible on all inputs, excluding search bars.
2. **User Input**. The main area in which the user enters a value.
3. **Directional Buttons**. The Directional buttons step between predetermined values.
4. **Container**. The Container wraps the entire component.


### Sizing & Spacing
The Number Input is only available in one size. It has been created in relation to other inputs, so it will line up correctly in forms.

### States
<NumberClickerStates />

The Number Input has two states - `Default` and `Focused`.

<NumberClickerButtonStates />

The Directional Buttons also have state. Clicking on the up arrow will increase the entered value, and clicking the down arrow will decrease the value.
