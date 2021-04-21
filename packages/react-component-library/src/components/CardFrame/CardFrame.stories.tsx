import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { CardFrame } from './index'
import { ComponentWithClass } from '../../common/ComponentWithClass'

export default { component: CardFrame, title: 'Card Frame' } as Meta

export const Default: Story<ComponentWithClass> = ({ children, ...props }) => (
  <CardFrame {...props}>{children}</CardFrame>
)

Default.args = {
  children: 'Arbitrary JSX',
}
