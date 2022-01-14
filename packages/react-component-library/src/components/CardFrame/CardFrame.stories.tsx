import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { CardFrame } from './index'

export default { component: CardFrame, title: 'Card Frame' } as ComponentMeta<
  typeof CardFrame
>

export const Default: ComponentStory<typeof CardFrame> = ({
  children,
  ...props
}) => <CardFrame {...props}>{children}</CardFrame>

Default.args = {
  children: 'Arbitrary JSX',
}
