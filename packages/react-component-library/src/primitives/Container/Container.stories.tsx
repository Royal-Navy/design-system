import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { Container } from '.'

export default {
  component: Container,
  parameters: { layout: 'fullscreen' },
  title: 'Container',
} as Meta<typeof Container>

export const Default: StoryFn<typeof Container> = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
)

Default.args = {
  children: 'Arbitrary JSX',
}
