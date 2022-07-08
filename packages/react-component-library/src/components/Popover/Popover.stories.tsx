import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import styled, { css } from 'styled-components'

import { FLOATING_BOX_SCHEME } from '../../primitives/FloatingBox'
import { Popover } from '.'

export default {
  component: Popover,
  title: 'Popover',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as ComponentMeta<typeof Popover>

const popoverTarget = (text = 'Hover on me') => (
  <div
    css={css`
      display: inline-block;
      padding: 1rem;
      background-color: #c9c9c9;
    `}
  >
    {text}
  </div>
)

const StyledContent = styled.pre`
  padding: 1rem;
`

export const Default: ComponentStory<typeof Popover> = (props) => (
  <Popover {...props}>{popoverTarget()}</Popover>
)

Default.args = {
  content: <StyledContent>This is some arbitrary JSX</StyledContent>,
}

export const Dark: ComponentStory<typeof Popover> = () => (
  <Popover
    content={<StyledContent>This is some arbitrary JSX</StyledContent>}
    scheme={FLOATING_BOX_SCHEME.DARK}
  >
    {popoverTarget()}
  </Popover>
)

Dark.storyName = 'Dark'

export const ClickToActivate: ComponentStory<typeof Popover> = () => (
  <Popover
    content={<StyledContent>This is some arbitrary JSX</StyledContent>}
    isClick
  >
    {popoverTarget('Click on me')}
  </Popover>
)

ClickToActivate.storyName = 'Click to activate'
