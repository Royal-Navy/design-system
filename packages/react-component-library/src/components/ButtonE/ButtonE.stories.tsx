import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { IconBrightnessLow } from '@defencedigital/icon-library'
import { ButtonE, ButtonEProps } from './index'
import {
  BUTTON_E_COLOR,
  BUTTON_E_SIZE,
  BUTTON_E_VARIANT,
  BUTTON_E_ICON_POSITION,
} from './constants'

export default {
  component: ButtonE,
  title: 'Button (Experimental)',
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta

export const Default: Story<ButtonEProps> = ({ children, ...rest }) => (
  <ButtonE {...rest}>{children}</ButtonE>
)

Default.args = {
  children: 'Default',
}

export const Primary: Story<ButtonEProps> = ({ children, ...rest }) => (
  <ButtonE {...rest}>{children}</ButtonE>
)

Primary.args = {
  variant: BUTTON_E_VARIANT.PRIMARY,
  children: 'Primary',
}

export const Secondary: Story<ButtonEProps> = ({ children, ...rest }) => (
  <ButtonE {...rest}>{children}</ButtonE>
)

Secondary.args = {
  variant: BUTTON_E_VARIANT.SECONDARY,
  children: 'Secondary',
}

export const Tertiary: Story<ButtonEProps> = ({ children, ...rest }) => (
  <ButtonE {...rest}>{children}</ButtonE>
)

Tertiary.args = {
  variant: BUTTON_E_VARIANT.TERTIARY,
  children: 'Tertiary',
}

export const Danger: Story<ButtonEProps> = ({ children, ...rest }) => (
  <ButtonE {...rest}>{children}</ButtonE>
)

Danger.args = {
  variant: BUTTON_E_VARIANT.PRIMARY,
  color: BUTTON_E_COLOR.DANGER,
  children: 'Danger',
}

export const Small: Story<ButtonEProps> = ({ children, ...rest }) => (
  <ButtonE {...rest}>{children}</ButtonE>
)

Small.args = {
  variant: BUTTON_E_VARIANT.PRIMARY,
  size: BUTTON_E_SIZE.SMALL,
  children: 'Small',
}

export const Large: Story<ButtonEProps> = ({ children, ...rest }) => (
  <ButtonE {...rest}>{children}</ButtonE>
)

Large.args = {
  variant: BUTTON_E_VARIANT.PRIMARY,
  size: BUTTON_E_SIZE.LARGE,
  children: 'Large',
}

export const Disabled: Story<ButtonEProps> = ({ children }) => (
  <ButtonE isDisabled>{children}</ButtonE>
)

Disabled.args = {
  children: 'Disabled',
}

export const WithLeftIcon: Story<ButtonEProps> = ({
  icon,
  iconPosition,
  children,
}) => (
  <ButtonE icon={icon} iconPosition={iconPosition}>
    {children}
  </ButtonE>
)

WithLeftIcon.args = {
  children: 'Default',
  icon: <IconBrightnessLow />,
  iconPosition: BUTTON_E_ICON_POSITION.LEFT,
}

WithLeftIcon.storyName = 'With left icon'

export const WithRightIcon: Story<ButtonEProps> = ({
  icon,
  iconPosition,
  children,
}) => (
  <ButtonE icon={icon} iconPosition={iconPosition}>
    {children}
  </ButtonE>
)

WithRightIcon.args = {
  children: 'Default',
  icon: <IconBrightnessLow />,
  iconPosition: BUTTON_E_ICON_POSITION.RIGHT,
}

WithRightIcon.storyName = 'With right icon'
