import React from 'react'
import styled from 'styled-components'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Dialog } from './index'
import { StyledDialog } from './partials/StyledDialog'
import { StyledMain } from '../Modal/partials/StyledMain'

const Wrapper = styled.div`
  height: 14rem;

  /* Styles extended for Storybook presentation */
  ${StyledDialog} {
    position: absolute;
    z-index: 1;

    ${StyledMain} {
      position: absolute;
    }
  }
`

export default {
  component: Dialog,
  title: 'Dialog',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Dialog>

const Template: ComponentStory<typeof Dialog> = (args) => (
  <Wrapper>
    <Dialog {...args} />
  </Wrapper>
)

export const Default = Template.bind({})
Default.args = {
  title: 'Example Title',
  description: 'Example description',
  isOpen: true,
}

export const Danger = Template.bind({})
Danger.args = {
  title: 'Example Title',
  description: 'Example description',
  isDanger: true,
  isOpen: true,
}
