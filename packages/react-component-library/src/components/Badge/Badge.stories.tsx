import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import {
  Badge,
  BADGE_COLOR,
  BADGE_COLOR_VARIANT,
  BADGE_SIZE,
  BADGE_VARIANT,
} from '.'

export default { component: Badge, title: 'Badge' } as Meta<typeof Badge>

export const Default: StoryFn<typeof Badge> = ({
  color,
  colorVariant,
  size,
  variant,
  children,
}) => (
  <Badge
    color={color}
    colorVariant={colorVariant}
    size={size}
    variant={variant}
  >
    {children}
  </Badge>
)

Default.args = {
  color: BADGE_COLOR.ACTION,
  colorVariant: BADGE_COLOR_VARIANT.FADED,
  size: BADGE_SIZE.REGULAR,
  variant: BADGE_VARIANT.REGULAR,
  children: 'Hello, World!',
}
