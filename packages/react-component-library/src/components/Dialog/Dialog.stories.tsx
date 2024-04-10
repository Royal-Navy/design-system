import React from 'react'
import styled from 'styled-components'
import { StoryFn, Meta } from '@storybook/react'

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
  title: 'Components/Dialog',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
} as Meta<typeof Dialog>

const Template: StoryFn<typeof Dialog> = (args) => (
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

export const RichDescription = Template.bind({})
RichDescription.args = {
  title: 'Example Title',
  description: (
    <div>
      Support Arbitrary JSX for <strong>rich</strong> description text.
    </div>
  ),
  isOpen: true,
}
