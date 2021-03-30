import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { CardFrame } from './index'

export default { component: CardFrame, title: 'Card Frame' } as Meta

export const Default = ({ children, ...props }: any) => (
  <CardFrame {...props}>{children}</CardFrame>
)

Default.args = {
  children: 'Arbitrary JSX',
}
