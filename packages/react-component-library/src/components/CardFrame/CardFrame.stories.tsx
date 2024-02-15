import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { CardFrame } from './index'

export default { component: CardFrame, title: 'Card Frame' } as Meta<
  typeof CardFrame
>

export const Default: StoryFn<typeof CardFrame> = ({ children, ...props }) => (
  <CardFrame {...props}>{children}</CardFrame>
)

Default.args = {
  children: 'Arbitrary JSX',
}
