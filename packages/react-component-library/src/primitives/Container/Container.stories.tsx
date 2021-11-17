import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Container, ContainerProps } from '.'

export default {
  component: Container,
  parameters: { layout: 'fullscreen' },
  title: 'Container',
} as Meta

export const Default: Story<ContainerProps> = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
)

Default.args = {
  children: 'Arbitrary JSX',
}
