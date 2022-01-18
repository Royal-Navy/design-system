import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Container } from '.'

export default {
  component: Container,
  parameters: { layout: 'fullscreen' },
  title: 'Container',
} as ComponentMeta<typeof Container>

export const Default: ComponentStory<typeof Container> = ({
  children,
  ...rest
}) => <Container {...rest}>{children}</Container>

Default.args = {
  children: 'Arbitrary JSX',
}
