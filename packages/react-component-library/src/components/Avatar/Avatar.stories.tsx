import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Avatar, AVATAR_VARIANT } from '.'

export default {
  component: Avatar,
  parameters: { layout: 'fullscreen' },
  title: 'Avatar',
} as ComponentMeta<typeof Avatar>

export const Default: ComponentStory<typeof Avatar> = ({
  initials,
  variant,
}) => (
  <div style={{ background: '#c9c9c9', padding: 20 }}>
    <Avatar initials={initials} variant={variant} />
  </div>
)

Default.args = {
  variant: AVATAR_VARIANT.LIGHT,
  initials: 'AT',
}
