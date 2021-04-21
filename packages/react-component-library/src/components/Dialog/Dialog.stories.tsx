import React from 'react'
import styled from 'styled-components'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Dialog, DialogProps } from './index'
import { StyledMain } from '../Modal/partials/StyledMain'

const StyledDialog = styled(Dialog)`
  position: absolute;
  z-index: 1;

  ${StyledMain} {
    position: absolute;
  }
`

export default {
  component: Dialog,
  title: 'Dialog',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta

export const Default: Story<DialogProps> = (props) => (
  <div style={{ height: '10rem' }}>
    {/* Styles extended for Storybook presentation */}
    <StyledDialog {...props} />
  </div>
)

Default.args = {
  title: 'Example Title',
  description: 'Example description',
  isOpen: true,
}

export const Danger: Story<DialogProps> = () => (
  <div style={{ height: '10rem' }}>
    <StyledDialog
      title="Example Title"
      description="Example description"
      isDanger
      isOpen
    />
  </div>
)
