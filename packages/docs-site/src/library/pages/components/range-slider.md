---
title: Range Slider
description: Range Slider allows the user to move a 'handle' to select a single value or range.
header: true
---

import { IconBrightnessLow, IconBrightnessHigh } from '@royalnavy/icon-library'
import { RangeSlider, Tab, TabSet } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import SketchWidget from '../../../components/presenters/sketch-widget'

import RangeSliderComponent from '../../images/components/range-slider/Component'
import RangeSliderAnatomy from '../../images/components/range-slider/Anatomy'
import RangeSliderStates from '../../images/components/range-slider/States'
import RangeSliderVariations from '../../images/components/range-slider/Variations'

# Overview

The Range Slider allows the user to move a 'handle' to select a single value or range.

<RangeSliderComponent />

<TabSet>
<Tab title="Design">

<SketchWidget name="RangeSlider" href="/design-system.sketch" />

    
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
  
</Tab>
<Tab title="Develop">

Range Slider allows the user to move a 'handle' to select a single value or range.

### Basic Usage

<CodeHighlighter source={`<RangeSlider
  domain={[0, 40]}
  mode={1}
  values={[20]}
  onChange={() => {}}
  onUpdate={() => {}}
  tracksLeft
/>`} language="javascript">
  <RangeSlider
    domain={[0, 40]}
    mode={1}
    values={[20]}
    onChange={() => {}}
    onUpdate={() => {}}
    tracksLeft
  />
</CodeHighlighter>

### Single Threshold

<CodeHighlighter source={`<RangeSlider
  domain={[0, 40]}
  mode={1}
  values={[20]}
  onChange={() => {}}
  onUpdate={() => {}}
  tracksLeft
  thresholds={[25]}
/>`} language="javascript">
  <RangeSlider
    domain={[0, 40]}
    mode={1}
    values={[20]}
    onChange={() => {}}
    onUpdate={() => {}}
    tracksLeft
    thresholds={[25]}
  />
</CodeHighlighter>

### Double Threshold

<CodeHighlighter source={`<RangeSlider
  domain={[0, 40]}
  mode={1}
  values={[20]}
  onChange={() => {}}
  onUpdate={() => {}}
  tracksLeft
  thresholds={[25, 50]}
/>`} language="javascript">
  <RangeSlider
    domain={[0, 40]}
    mode={1}
    values={[20]}
    onChange={() => {}}
    onUpdate={() => {}}
    tracksLeft
    thresholds={[25, 50]}
  />
</CodeHighlighter>

### Stepped

<CodeHighlighter source={`<RangeSlider
  domain={[0, 40]}
  step={10}
  mode={1}
  values={[20]}
  onChange={() => {}}
  onUpdate={() => {}}
  tickCount={4}
  tracksLeft
/>`} language="javascript">
  <RangeSlider
    domain={[0, 40]}
    step={10}
    mode={1}
    values={[20]}
    onChange={() => {}}
    onUpdate={() => {}}
    tickCount={4}
    tracksLeft
  />
</CodeHighlighter>

### Multiple handles

<CodeHighlighter source={`<RangeSlider
  domain={[0, 40]}
  step={10}
  mode={1}
  values={[10, 30]}
  onChange={() => {}}
  onUpdate={() => {}}
  tickCount={4}
/>`} language="javascript">
  <RangeSlider
    domain={[0, 40]}
    step={10}
    mode={1}
    values={[10, 30]}
    onChange={() => {}}
    onUpdate={() => {}}
    tickCount={4}
  />
</CodeHighlighter>

### With icons

<CodeHighlighter source={`<RangeSlider
  domain={[0, 40]}
  step={10}
  mode={1}
  values={[20, 30]}
  onChange={() => {}}
  onUpdate={() => {}}
  tickCount={4}
  tracksLeft
  IconLeft={IconBrightnessLow}
  IconRight={IconBrightnessRight}
/>`} language="javascript">
  <RangeSlider
    domain={[0, 40]}
    step={10}
    mode={1}
    values={[20]}
    onChange={() => {}}
    onUpdate={() => {}}
    tickCount={4}
    tracksLeft
    IconLeft={IconBrightnessLow}
    IconRight={IconBrightnessHigh}
  />
</CodeHighlighter>

### With labels

<CodeHighlighter source={`<RangeSlider
  domain={[0, 40]}
  step={10}
  mode={1}
  values={[20]}
  onChange={() => {}}
  onUpdate={() => {}}
  tickCount={4}
  tracksLeft
  hasLabels
/>`} language="javascript">
  <RangeSlider
    domain={[0, 40]}
    step={10}
    mode={1}
    values={[20]}
    onChange={() => {}}
    onUpdate={() => {}}
    tickCount={4}
    tracksLeft
    hasLabels
  />
</CodeHighlighter>

### Reversed scale

<CodeHighlighter source={`<RangeSlider
  domain={[0, 40]}
  step={10}
  mode={1}
  values={[20]}
  onChange={() => {}}
  onUpdate={() => {}}
  tickCount={4}
  tracksRight
  hasLabels
  reversed
/>`} language="javascript">
  <RangeSlider
    domain={[0, 40]}
    step={10}
    mode={1}
    values={[20]}
    onChange={() => {}}
    onUpdate={() => {}}
    tickCount={4}
    tracksRight
    hasLabels
    reversed
  />
</CodeHighlighter>

### Disabled

<CodeHighlighter source={`<RangeSlider
  domain={[0, 40]}
  step={10}
  mode={1}
  values={[20]}
  onChange={() => {}}
  onUpdate={() => {}}
  tickCount={4}
  tracksLeft
  disabled
/>`} language="javascript">
  <RangeSlider
    domain={[0, 40]}
    step={10}
    mode={1}
    values={[20]}
    onChange={() => {}}
    onUpdate={() => {}}
    tickCount={4}
    tracksLeft
    disabled
  />
</CodeHighlighter>

### RangeSlider Properties

Additional details about props can be found [here](https://sghall.github.io/react-compound-slider/#/props).

<DataTable data={[
  {
    Name: 'className',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'Custom CSS class to add to the RangeSlider element.',
  },
  {
    Name: 'domain',
    Type: 'number[]',
    Required: 'True',
    Default: '',
    Description: 'The lower and upper bounds of the range.',
  },
  {
    Name: 'step',
    Type: 'number',
    Required: 'False',
    Default: '',
    Description: 'Step change by this increment.',
  },
  {
    Name: 'mode',
    Type: 'number|func',
    Required: 'True',
    Default: '',
    Description: 'The interaction mode. Value of 1 will allow handles to cross each other. Value of 2 will keep the sliders from crossing and separated by a step. Value of 3 will make the handles pushable and keep them a step apart. ADVANCED: You can also supply a function that will be passed the current values and the incoming update. Your function should return what the state should be set as.',
  },
  {
    Name: 'values',
    Type: 'number[]',
    Required: 'True',
    Default: '',
    Description: 'An array of numbers. You can supply one for a value slider, two for a range slider or more to create n-handled sliders. The values should correspond to valid step values in the domain. The numbers will be forced into the domain if they are two small or large.',
  },
  {
    Name: 'thresholds',
    Type: 'number[]',
    Required: 'False',
    Default: '',
    Description: 'An array of user defined thresholds. This is a percentage value. You can specify up to two distinct thresholds. The first value represents the lower threshold and second the upper.',
  },
  {
    Name: 'onChange',
    Type: 'func',
    Required: 'False',
    Default: '',
    Description: 'Callback invoked when the value of the slider has changed. This will recieve changes at the end of a slide as well as changes from clicks on rails and tracks. Receives values.',
  },
  {
    Name: 'onUpdate',
    Type: 'func',
    Required: 'False',
    Default: '',
    Description: 'Callback invoked with the values at each update (caution: high-volume updates when dragging). Receives values.',
  },
  {
    Name: 'IconLeft',
    Type: 'React.ElementType',
    Required: 'False',
    Default: '',
    Description: 'Icon component to display left of the slider.',
  },
  {
    Name: 'IconRight',
    Type: 'React.ElementType',
    Required: 'False',
    Default: '',
    Description: 'Icon component to display right of the slider.',
  },
  {
    Name: 'tracksLeft',
    Type: 'boolean',
    Required: 'False',
    Default: '',
    Description: 'Display slider tracks to the left of the handle(s).',
  },
  {
    Name: 'tracksRight',
    Type: 'boolean',
    Required: 'False',
    Default: '',
    Description: 'Display slider tracks to the right of the handle(s).',
  },  
  {
    Name: 'hasLabels',
    Type: 'boolean',
    Required: 'False',
    Default: '',
    Description: 'Display the scale at the bottom of the slider.',
  },
  {
    Name: 'isReversed',
    Type: 'boolean',
    Required: 'False',
    Default: '',
    Description: 'Reverse the slider scale.',
  },
  {
    Name: 'isDisabled',
    Type: 'boolean',
    Required: 'False',
    Default: '',
    Description: 'Ignore all mouse, touch and keyboard events.',
  },
]} />
</Tab>
</TabSet>
