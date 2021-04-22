import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Avatar, AvatarProps, AVATAR_VARIANT } from '.'

export default { component: Avatar, title: 'Avatar' } as Meta

export const Default: Story<AvatarProps> = ({ initials, variant }) => (
  <div style={{ background: '#c9c9c9', padding: 20 }}>
    <Avatar initials={initials} variant={variant} />
  </div>
)

Default.args = {
  variant: AVATAR_VARIANT.LIGHT,
  initials: 'AT',
}
