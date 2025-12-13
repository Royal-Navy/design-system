import React, { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import {
  IconAgriculture,
  IconAnchor,
  IconBrightnessAuto,
  IconRemove,
} from '@royalnavy/icon-library'
import styled from 'styled-components'

import { Select } from './index'
import { SelectOption } from './SelectOption'

export default {
  component: Select,
  title: 'Components/Select',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    docs: {
      description: {
        component:
          'This component wraps a popular open-source library. See comprehensive documentation [here](https://www.downshift-js.com/downshift/).',
      },
    },
    options: {
      enableShortcuts: false,
    },
  },
  args: {
    label: 'Some label',
  },
} as Meta<typeof Select>

const StyledWrapper = styled.div<{ $isDisabled?: boolean }>`
  height: ${({ $isDisabled }) => ($isDisabled ? 'initial' : '18rem')};
  max-width: 20rem;
`

const OPTIONS = [
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
  { text: 'Date', value: 'date' },
  { text: 'Elderberry', value: 'elderberry' },
  { text: 'Fig', value: 'fig' },
  { text: 'Grape', value: 'grape' },
]

const Template: StoryFn<typeof Select> = (args) => (
  <StyledWrapper $isDisabled={args.isDisabled}>
    <Select {...args}>
      <SelectOption value="one">A</SelectOption>
      <SelectOption value="two">B</SelectOption>
      <SelectOption value="long">
        This is a really, really long select option label that overflows the
        container when selected
      </SelectOption>
      <SelectOption value="three" isDisabled>
        Three (disabled)
      </SelectOption>
    </Select>
  </StyledWrapper>
)

const TemplateWithIconsAndBadges: StoryFn<typeof Select> = (args) => (
  <StyledWrapper $isDisabled={args.isDisabled}>
    <Select {...args}>
      <SelectOption badge={100} icon={<IconAnchor />} value="one">
        One
      </SelectOption>
      <SelectOption
        badge="A custom badge"
        badgeProps={{
          color: 'supf',
          colorVariant: 'faded',
        }}
        icon={<IconAnchor />}
        value="JSX badge"
      >
        Two
      </SelectOption>
      <SelectOption badge={110} icon={<IconRemove />} value="two">
        Three
      </SelectOption>
      <SelectOption badge={111} icon={<IconAgriculture />} value="three">
        Four
      </SelectOption>
      <SelectOption badge={112} icon={<IconBrightnessAuto />} value="four">
        Five
      </SelectOption>
    </Select>
  </StyledWrapper>
)

export const Default = Template.bind({})

export const Disabled = Template.bind({})
Disabled.args = {
  isDisabled: true,
}

export const NoClearButton = Template.bind({})
NoClearButton.args = {
  hideClearButton: true,
  initialValue: 'two',
}

export const Open = Template.bind({})
Open.args = {
  initialIsOpen: true,
}

export const Error = Template.bind({})
Error.args = {
  isInvalid: true,
}

export const Value = Template.bind({})
Value.args = {
  initialValue: 'two',
}

export const IconsAndBadges = TemplateWithIconsAndBadges.bind({})

const StyledBottomRightWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 2rem;
`

export const AutoPositioning: StoryFn<typeof Select> = (args) => (
  <StyledBottomRightWrapper>
    <Select {...args}>
      {OPTIONS.map((x) => (
        <SelectOption key={x.value} value={x.value}>
          {x.text}
        </SelectOption>
      ))}
    </Select>
  </StyledBottomRightWrapper>
)
AutoPositioning.args = {
  label: 'Auto-positioning Select',
  initialIsOpen: true,
}
AutoPositioning.parameters = {
  docs: {
    description: {
      story:
        'This story demonstrates the automatic positioning of the dropdown based on available space. The Select is positioned in the bottom right corner, so the dropdown should open upwards.',
    },
  },
}

export const MultiSelect: StoryFn<typeof Select> = (args) => (
  <StyledWrapper $isDisabled={args.isDisabled}>
    <Select {...args} isMulti>
      {OPTIONS.map((x) => (
        <SelectOption key={x.value} value={x.value}>
          {x.text}
        </SelectOption>
      ))}
    </Select>
  </StyledWrapper>
)

export const MultiSelectWithDisabledOptions: StoryFn<typeof Select> = (
  args
) => (
  <StyledWrapper>
    <Select {...args} isMulti>
      {OPTIONS.map((x, i) => (
        <SelectOption key={x.value} value={x.value} isDisabled={i % 2 === 0}>
          {x.text}
        </SelectOption>
      ))}
    </Select>
  </StyledWrapper>
)

export const MultiSelectValue: StoryFn<typeof Select> = (args) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([
    'apple',
    'cherry',
  ])

  return (
    <StyledWrapper>
      <Select
        {...args}
        isMulti
        value={selectedItems}
        onChange={(items) => {
          setSelectedItems(items)
          args.onChange?.(items)
        }}
      >
        {OPTIONS.map((x) => (
          <SelectOption key={x.value} value={x.value}>
            {x.text}
          </SelectOption>
        ))}
      </Select>
    </StyledWrapper>
  )
}

export const MultiSelectIconsAndBadges = TemplateWithIconsAndBadges.bind({})
MultiSelectIconsAndBadges.args = {
  isMulti: true,
}

export const MultiSelectWithReallyLongText = Template.bind({})
MultiSelectWithReallyLongText.args = {
  isMulti: true,
}
