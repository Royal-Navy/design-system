import React from 'react'
import styled from 'styled-components'

import { color, spacing } from '@royalnavy/design-tokens'
import { Meta, StoryFn } from '@storybook/react'

import { Panel } from './index'

export default {
  component: Panel,
  title: 'Primitives/Panel',
  argTypes: {
    children: {
      control: 'text',
      description: 'Arbitrary JSX or text',
    },
  },
} as Meta<typeof Panel>

const StyledContainer = styled.div`
  min-height: 8rem;
  width: 600px;
  display: flex;
  padding: ${spacing('8')};
  gap: ${spacing('4')};
  background-color: ${color('neutral', '100')};
`

export const Default: StoryFn<typeof Panel> = ({ children, ...rest }) => (
  <StyledContainer>
    <Panel {...rest}>{children}</Panel>
  </StyledContainer>
)

Default.args = {
  children: 'Hello, World!',
}
