import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import styled, { css } from 'styled-components'

import { FLOATING_BOX_SCHEME } from '../../primitives/FloatingBox'
import { Popover } from '.'

const StyledContent = styled.pre`
  padding: 1rem;
`

export default {
  component: Popover,
  title: 'Popover',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
  args: {
    content: <StyledContent>This is some arbitrary JSX</StyledContent>,
  },
} as ComponentMeta<typeof Popover>

const Template: ComponentStory<typeof Popover> = (args) => (
  <Popover {...args}>
    <div
      css={css`
        display: inline-block;
        padding: 1rem;
        background-color: #c9c9c9;
      `}
    >
      {args.isClick ? 'Click on me' : 'Hover on me'}
    </div>
  </Popover>
)

export const Default = Template.bind({})

export const Dark = Template.bind({})
Dark.storyName = 'Dark'
Dark.args = {
  scheme: FLOATING_BOX_SCHEME.DARK,
}

export const ClickToActivate = Template.bind({})
ClickToActivate.storyName = 'Click to activate'
ClickToActivate.args = {
  isClick: true,
}

export const Open = Template.bind({})
Open.args = {
  isVisible: true,
}
