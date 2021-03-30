import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { Container } from '.'

export default { component: Container, title: 'Container' } as Meta

export const Default = ({ children, ...rest }: any) => (
  <Container {...rest}>{children}</Container>
)

Default.args = {
  children: 'Arbitrary JSX',
}
