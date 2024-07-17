import styled from 'styled-components'
import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { Tooltip, TOOLTIP_POSITION } from '.'

export default {
  component: Tooltip,
  title: 'Components/Tooltip',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
  argTypes: {
    position: {
      control: 'select',
      options: Object.values(TOOLTIP_POSITION),
    },
  },
} as Meta<typeof Tooltip>

const StyledContainer = styled.div`
  min-height: 8rem;
`

export const Default: StoryFn<typeof Tooltip> = ({ children, ...rest }) => (
  <StyledContainer>
    <Tooltip {...rest}>{children}</Tooltip>
  </StyledContainer>
)

Default.args = {
  children: 'Hello, World!',
}

export const WithTitle: StoryFn<typeof Tooltip> = (props) => (
  <div css={{ height: '4rem' }}>
    <Tooltip {...props} title="Example title">
      This tooltip has a title!
    </Tooltip>
  </div>
)

WithTitle.storyName = 'Title'
