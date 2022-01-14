import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { IconBrightnessLow } from '@defencedigital/icon-library'
import { Button } from './index'
import {
  BUTTON_COLOR,
  BUTTON_SIZE,
  BUTTON_VARIANT,
  BUTTON_ICON_POSITION,
} from './constants'

export default {
  component: Button,
  title: 'Button',
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof Button>

export const Default: ComponentStory<typeof Button> = ({
  children,
  ...rest
}) => <Button {...rest}>{children}</Button>

Default.args = {
  children: 'Default',
}

export const Primary: ComponentStory<typeof Button> = ({
  children,
  ...rest
}) => <Button {...rest}>{children}</Button>

Primary.args = {
  variant: BUTTON_VARIANT.PRIMARY,
  children: 'Primary',
}

export const Secondary: ComponentStory<typeof Button> = ({
  children,
  ...rest
}) => <Button {...rest}>{children}</Button>

Secondary.args = {
  variant: BUTTON_VARIANT.SECONDARY,
  children: 'Secondary',
}

export const Tertiary: ComponentStory<typeof Button> = ({
  children,
  ...rest
}) => <Button {...rest}>{children}</Button>

Tertiary.args = {
  variant: BUTTON_VARIANT.TERTIARY,
  children: 'Tertiary',
}

export const Danger: ComponentStory<typeof Button> = ({
  children,
  ...rest
}) => <Button {...rest}>{children}</Button>

Danger.args = {
  variant: BUTTON_VARIANT.PRIMARY,
  color: BUTTON_COLOR.DANGER,
  children: 'Danger',
}

export const Small: ComponentStory<typeof Button> = ({ children, ...rest }) => (
  <Button {...rest}>{children}</Button>
)

Small.args = {
  variant: BUTTON_VARIANT.PRIMARY,
  size: BUTTON_SIZE.SMALL,
  children: 'Small',
}

export const Large: ComponentStory<typeof Button> = ({ children, ...rest }) => (
  <Button {...rest}>{children}</Button>
)

Large.args = {
  variant: BUTTON_VARIANT.PRIMARY,
  size: BUTTON_SIZE.LARGE,
  children: 'Large',
}

export const Disabled: ComponentStory<typeof Button> = ({ children }) => (
  <Button isDisabled>{children}</Button>
)

Disabled.args = {
  children: 'Disabled',
}

export const WithLeftIcon: ComponentStory<typeof Button> = ({
  icon,
  iconPosition,
  children,
}) => (
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

export const WithRightIcon: ComponentStory<typeof Button> = ({
  icon,
  iconPosition,
  children,
}) => (
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
