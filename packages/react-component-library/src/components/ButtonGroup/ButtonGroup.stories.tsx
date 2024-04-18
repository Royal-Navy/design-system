import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { IconBrightnessLow } from '@royalnavy/icon-library'

import { ButtonGroup, ButtonGroupItem } from '.'
import { COMPONENT_SIZE } from '../Forms'

export default {
  component: ButtonGroup,
  subcomponents: { ButtonGroupItem },
  title: 'Components/Button Group',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta<typeof ButtonGroup>

export const Default: StoryFn<typeof ButtonGroup> = ({ size }) => (
  <ButtonGroup size={size}>
    <ButtonGroupItem onClick={action('onClick - One')}>One</ButtonGroupItem>
    <ButtonGroupItem onClick={action('onClick - Two')}>Two</ButtonGroupItem>
    <ButtonGroupItem
      onClick={action('onClick - Three')}
      isDisabled
      icon={<IconBrightnessLow />}
    >
      Three
    </ButtonGroupItem>
  </ButtonGroup>
)

Default.args = {
  size: COMPONENT_SIZE.FORMS,
}

export const Small: StoryFn<typeof ButtonGroup> = ({ size }) => (
  <ButtonGroup size={size}>
    <ButtonGroupItem onClick={action('onClick')}>One</ButtonGroupItem>
    <ButtonGroupItem>Two</ButtonGroupItem>
    <ButtonGroupItem isDisabled icon={<IconBrightnessLow />}>
      Three
    </ButtonGroupItem>
  </ButtonGroup>
)

Small.args = {
  size: COMPONENT_SIZE.SMALL,
}
