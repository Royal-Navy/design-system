import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { Avatar, AVATAR_VARIANT } from '.'

export default {
  component: Avatar,
  parameters: { layout: 'fullscreen' },
  title: 'Components/Avatar',
} as Meta<typeof Avatar>

const Template: StoryFn<typeof Avatar> = (props) => (
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
