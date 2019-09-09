---
title: Number Clicker
description: The Number Clicker is an Input component. It only accepts numbers that can be stepped with the additional arrows.
header: true
---

import { Icons, Tab, TabSet } from '@royalnavy/react-component-library'
import DataTable from '../../../../components/presenters/data-table'
import CodeHighlighter from '../../../../components/presenters/code-highlighter'
import SketchWidget from '../../../../components/presenters/sketch-widget'
import NumberClickerComponent from '../../../images/components/forms/number-clicker/component.svg'
import NumberClickerAnatomy from '../../../images/components/forms/number-clicker/anatomy.svg'
import NumberClickerStates from '../../../images/components/forms/number-clicker/states.svg'
import NumberClickerButtonStates from '../../../images/components/forms/number-clicker/button-states.svg'

# Overview
The Number Clicker is an Number Input component - it only accepts numbers and can be stepped with the additional arrows.

<NumberClickerComponent />

## Usage
The Number Clicker allows the user to step between predetermined values. They can also manually enter a number into the input. 

<TabSet>

<Tab title="Design">

<SketchWidget name="NumberClicker" href="/standards-toolkit.sketch" />

  The Number Clicker should stand out and be easily discoverable by users. The text label should be concise, effectively communicating to the user the range or value required.

  ### Anatomy
  <NumberClickerAnatomy /> 

  1. **Label**. The Label should be used to describe to the user what the desired input should be. Every field should have a text label. The label should always be visible on all inputs, excluding search bars.
  2. **User Input**. The main area the user enters a value.
  3. **Directional Buttons**. The Directional buttons step between predetermined values.
  4. **Container**. The Container wraps the entire component.

  
### Sizing & Spacing
The Number Clicker is only available in 1 size. It has been created in relation to other inputs, so will line up correctly in forms.

### States
<NumberClickerStates />

The Number Clicker has two states - Default and Focused.

<NumberClickerButtonStates />

The Directional Buttons also have state. Clicking on the up arrow will increase the entered value, and clicking the down arrow will decrease the value.

</Tab>


<Tab title="Develop">

</Tab>
</TabSet>
