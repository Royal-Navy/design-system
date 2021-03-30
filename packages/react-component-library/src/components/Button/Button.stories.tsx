import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { IconBrightnessLow } from '@royalnavy/icon-library'
import { Button } from './index'
import {
  BUTTON_COLOR,
  BUTTON_SIZE,
  BUTTON_VARIANT,
  BUTTON_ICON_POSITION,
} from './constants'

export default { component: Button, title: 'Button' } as Meta

export const Default = ({ children, ...rest }: any) => (
  <Button {...rest}>{children}</Button>
)

Default.args = {
  children: 'Default',
}

export const Primary = ({ children, ...rest }: any) => (
  <Button {...rest}>{children}</Button>
)

Primary.args = {
  variant: BUTTON_VARIANT.PRIMARY,
  children: 'Primary',
}

export const Secondary = ({ children, ...rest }: any) => (
  <Button {...rest}>{children}</Button>
)

Secondary.args = {
  variant: BUTTON_VARIANT.SECONDARY,
  children: 'Secondary',
}

export const Tertiary = ({ children, ...rest }: any) => (
  <Button {...rest}>{children}</Button>
)

Tertiary.args = {
  variant: BUTTON_VARIANT.TERTIARY,
  children: 'Tertiary',
}

export const Danger = ({ children, ...rest }: any) => (
  <Button {...rest}>{children}</Button>
)

Danger.args = {
  variant: BUTTON_VARIANT.PRIMARY,
  color: BUTTON_COLOR.DANGER,
  children: 'Danger',
}

export const Small = ({ children, ...rest }: any) => (
  <Button {...rest}>{children}</Button>
)

Small.args = {
  variant: BUTTON_VARIANT.PRIMARY,
  size: BUTTON_SIZE.SMALL,
  children: 'Small',
}

export const Large = ({ children, ...rest }: any) => (
  <Button {...rest}>{children}</Button>
)

Large.args = {
  variant: BUTTON_VARIANT.PRIMARY,
  size: BUTTON_SIZE.LARGE,
  children: 'Large',
}

export const Disabled = ({ children }: any) => (
  <Button isDisabled>{children}</Button>
)

Disabled.args = {
  children: 'Disabled',
}

export const WithLeftIcon = ({ icon, iconPosition, children }: any) => (
  <Button icon={icon} iconPosition={iconPosition}>
    {children}
  </Button>
)

WithLeftIcon.args = {
  children: 'Default',
  icon: <IconBrightnessLow />,
  iconPosition: BUTTON_ICON_POSITION.LEFT,
}

WithLeftIcon.storyName = 'With left icon'

export const WithRightIcon = ({ icon, iconPosition, children }: any) => (
  <Button icon={icon} iconPosition={iconPosition}>
    {children}
  </Button>
)

WithRightIcon.args = {
  children: 'Default',
  icon: <IconBrightnessLow />,
  iconPosition: BUTTON_ICON_POSITION.RIGHT,
}

WithRightIcon.storyName = 'With right icon'
