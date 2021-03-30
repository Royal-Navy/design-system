import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { Avatar, AVATAR_VARIANT } from '.'

export default { component: Avatar, title: 'Avatar' } as Meta

export const Default = ({ initials, variant }: any) => (
  <div style={{ background: '#a0a0a0', padding: 20 }}>
    <Avatar initials={initials} variant={variant} />
  </div>
)

Default.args = {
  variant: AVATAR_VARIANT.LIGHT,
  initials: 'AT',
}
