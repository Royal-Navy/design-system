import React from 'react'
import styled from 'styled-components'
import { Story, Meta } from '@storybook/react'

import { Modal, ModalProps } from './index'
import { StyledMain } from './partials/StyledMain'
import { StyledModal } from './partials/StyledModal'
import { BUTTON_COLOR, ButtonProps } from '../Button'

export default {
  component: Modal,
  title: 'Modal',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
    jsx: {
      showFunctions: true,
    },
  },
} as Meta

const primaryButton: ButtonProps = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: (e: React.SyntheticEvent) => {},
  children: 'Primary',
}

const secondaryButton: ButtonProps = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: (e: React.SyntheticEvent) => {},
  children: 'Secondary',
}

const tertiaryButton: ButtonProps = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: (e: React.SyntheticEvent) => {},
  children: 'Tertiary',
}

const Wrapper = styled.div<{ $height: string }>`
  height: ${({ $height }) => $height};

  /* Styles extended for Storybook presentation */
  ${StyledModal} {
    position: absolute;
    z-index: 1;

    ${StyledMain} {
      position: absolute;
    }
  }
`

const Template: Story<ModalProps> = (args) => (
  <Wrapper $height={args.title && args.primaryButton ? '17rem' : '12rem'}>
    <Modal {...args}>
      <pre style={{ padding: '1rem' }}>Arbitrary JSX content</pre>
    </Modal>
  </Wrapper>
)

export const Default = Template.bind({})
Default.args = {
  titleId: undefined,
  descriptionId: undefined,
  title: 'Example Title',
  isOpen: true,
  primaryButton,
  secondaryButton,
  tertiaryButton,
}

export const NoHeader = Template.bind({})
NoHeader.args = {
  isOpen: true,
  primaryButton,
  secondaryButton,
  tertiaryButton,
}
NoHeader.storyName = 'No header'

export const NoButtons = Template.bind({})
NoButtons.args = {
  title: 'Example Title',
  isOpen: true,
}
NoButtons.storyName = 'No buttons'

export const DangerButton = Template.bind({})
DangerButton.args = {
  isOpen: true,
  title: 'Example Title',
  primaryButton: {
    ...primaryButton,
    color: BUTTON_COLOR.DANGER,
    icon: undefined,
  },
  secondaryButton,
}
DangerButton.storyName = 'Danger button with no icon'

export const NoTertiaryButton = Template.bind({})
NoTertiaryButton.args = {
  title: 'Example Title',
  isOpen: true,
  primaryButton,
  secondaryButton,
}
NoTertiaryButton.storyName = 'No tertiary button'

export const Blank = Template.bind({})
Blank.args = {
  isOpen: true,
}
Blank.storyName = 'Blank'
