import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'

import { IconBrightnessLow } from '@royalnavy/icon-library'

import { ButtonGroup, ButtonGroupItem } from '.'
import { BUTTON_SIZE } from '../Button'

export default {
  component: ButtonGroup,
  subcomponents: { ButtonGroupItem },
  title: 'Button Group',
} as Meta

export const Default = ({ size }: any) => (
  <ButtonGroup size={size}>
    <ButtonGroupItem onClick={action('Clicked')}>One</ButtonGroupItem>
    <ButtonGroupItem>Two</ButtonGroupItem>
    <ButtonGroupItem isDisabled icon={<IconBrightnessLow />}>
      Three
    </ButtonGroupItem>
  </ButtonGroup>
)

Default.args = {
  size: BUTTON_SIZE.REGULAR,
}

export const Small = ({ size }: any) => (
  <ButtonGroup size={size}>
    <ButtonGroupItem onClick={action('Clicked')}>One</ButtonGroupItem>
    <ButtonGroupItem>Two</ButtonGroupItem>
    <ButtonGroupItem isDisabled icon={<IconBrightnessLow />}>
      Three
    </ButtonGroupItem>
  </ButtonGroup>
)

Small.args = {
  size: BUTTON_SIZE.SMALL,
}

export const Large = ({ size }: any) => (
  <ButtonGroup size={size}>
    <ButtonGroupItem onClick={action('Clicked')}>One</ButtonGroupItem>
    <ButtonGroupItem>Two</ButtonGroupItem>
    <ButtonGroupItem isDisabled icon={<IconBrightnessLow />}>
      Three
    </ButtonGroupItem>
  </ButtonGroup>
)

Large.args = {
  size: BUTTON_SIZE.LARGE,
}
