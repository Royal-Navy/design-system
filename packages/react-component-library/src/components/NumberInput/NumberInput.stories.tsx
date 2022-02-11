import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { IconBrightnessHigh } from '@defencedigital/icon-library'

import { NumberInput } from './NumberInput'
import { UNIT_POSITION } from './constants'

const chromaticIgnore = { chromatic: { disable: true } }

export default {
  component: NumberInput,
  title: 'Number Input',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as ComponentMeta<typeof NumberInput>

export const Default: ComponentStory<typeof NumberInput> = (props) => (
  <NumberInput {...props} />
)

Default.args = {
  id: undefined,
  name: 'number-input-default',
}

export const Condensed: ComponentStory<typeof NumberInput> = (props) => (
  <NumberInput {...props} isCondensed name="number-input-condensed" />
)

Condensed.storyName = 'Condensed'

export const Clearable: ComponentStory<typeof NumberInput> = (props) => (
  <NumberInput {...props} canClear name="number-input-clearable" value={10} />
)

Clearable.storyName = 'Clearable'

export const Disabled: ComponentStory<typeof NumberInput> = (props) => (
  <NumberInput {...props} isDisabled name="number-input-disabled" />
)

Disabled.storyName = 'Disabled'

export const WithFootnote: ComponentStory<typeof NumberInput> = (props) => (
  <NumberInput
    {...props}
    footnote="Footnote"
    name="number-input-with-footnote"
  />
)

WithFootnote.storyName = 'With footnote'

export const WithLabel: ComponentStory<typeof NumberInput> = (props) => (
  <NumberInput {...props} label="Label" name="number-input-label" />
)

WithLabel.storyName = 'With label'

export const Placeholder: ComponentStory<typeof NumberInput> = (props) => (
  <NumberInput
    {...props}
    label="Label"
    name="number-input-placeholder"
    placeholder="Placeholder"
  />
)

Placeholder.storyName = 'With placeholder'

export const StartAdornmentIcon: ComponentStory<typeof NumberInput> = (
  props
) => (
  <NumberInput
    {...props}
    name="number-input-start-adornment-icon"
    startAdornment={<IconBrightnessHigh />}
  />
)

StartAdornmentIcon.storyName = 'With start adornment icon'

export const StartAdornmentText: ComponentStory<typeof NumberInput> = (
  props
) => (
  <NumberInput
    {...props}
    name="number-input-start-adornment-text"
    startAdornment="Kts"
  />
)

StartAdornmentText.storyName = 'With start adornment text'

export const WithUnit: ComponentStory<typeof NumberInput> = (props) => (
  <NumberInput
    {...props}
    name="number-input-unit"
    value={1000}
    unit="m&sup3;"
  />
)

WithUnit.storyName = 'With unit'
WithUnit.parameters = chromaticIgnore

export const WithUnitLabel: ComponentStory<typeof NumberInput> = (props) => (
  <NumberInput
    {...props}
    label="Cost"
    name="number-input-unit-label"
    value={1000}
    unit="m&sup3;"
  />
)

WithUnitLabel.storyName = 'With unit and label'
WithUnitLabel.parameters = chromaticIgnore

export const UnitBefore: ComponentStory<typeof NumberInput> = (props) => (
  <NumberInput
    {...props}
    name="number-input-unit-before"
    value={1000}
    unit="&pound;"
    unitPosition={UNIT_POSITION.BEFORE}
  />
)

UnitBefore.storyName = 'With unit before'
