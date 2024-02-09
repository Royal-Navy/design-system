import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Avatar, AVATAR_VARIANT } from '.'

export default {
  component: Avatar,
  parameters: { layout: 'fullscreen' },
  title: 'Avatar',
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (props) => (
  <div
    css={`
      background: #c9c9c9;
      padding: 20px;
    `}
  >
    <Avatar {...props} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  children: 'AT',
  variant: AVATAR_VARIANT.LIGHT,
}
