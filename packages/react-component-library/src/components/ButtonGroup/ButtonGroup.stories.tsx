import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { IconBrightnessLow } from '@defencedigital/icon-library'

import { ButtonGroup, ButtonGroupProps, ButtonGroupItem } from '.'
import { BUTTON_SIZE } from '../Button'

export default {
  component: ButtonGroup,
  subcomponents: { ButtonGroupItem },
  title: 'Button Group',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as ComponentMeta<typeof ButtonGroup>

export const Default: ComponentStory<typeof ButtonGroup> = ({ size }) => (
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
  size: BUTTON_SIZE.REGULAR,
}

export const Small: ComponentStory<typeof ButtonGroup> = ({ size }) => (
  <ButtonGroup size={size}>
    <ButtonGroupItem onClick={action('onClick')}>One</ButtonGroupItem>
    <ButtonGroupItem>Two</ButtonGroupItem>
    <ButtonGroupItem isDisabled icon={<IconBrightnessLow />}>
      Three
    </ButtonGroupItem>
  </ButtonGroup>
)

Small.args = {
  size: BUTTON_SIZE.SMALL,
}

export const Large: ComponentStory<typeof ButtonGroup> = ({
  size,
}: ButtonGroupProps) => (
  <ButtonGroup size={size}>
    <ButtonGroupItem onClick={action('onClick')}>One</ButtonGroupItem>
    <ButtonGroupItem>Two</ButtonGroupItem>
    <ButtonGroupItem isDisabled icon={<IconBrightnessLow />}>
      Three
    </ButtonGroupItem>
  </ButtonGroup>
)

Large.args = {
  size: BUTTON_SIZE.LARGE,
}
