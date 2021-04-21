import React from 'react'
import styled from 'styled-components'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Modal, ModalProps } from './index'
import { StyledMain } from './partials/StyledMain'
import { BUTTON_COLOR, ButtonProps } from '../Button'

export default {
  component: Modal,
  title: 'Modal',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
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

const StyledModal = styled(Modal)`
  position: absolute;
  z-index: 1;

  ${StyledMain} {
    position: absolute;
  }
`

export const Default: Story<ModalProps> = (props) => (
  <div style={{ height: '15rem' }}>
    {/* Styles extended for Storybook presentation */}
    <StyledModal {...props}>
      <pre style={{ padding: '1rem' }}>Arbitrary JSX content</pre>
    </StyledModal>
  </div>
)

Default.args = {
  titleId: undefined,
  descriptionId: undefined,
  title: 'Example Title',
  isOpen: true,
  primaryButton,
  secondaryButton,
  tertiaryButton,
}

export const NoHeader: Story<ModalProps> = () => (
  <div style={{ height: '10rem' }}>
    <StyledModal
      primaryButton={primaryButton}
      secondaryButton={secondaryButton}
      tertiaryButton={tertiaryButton}
      isOpen
    >
      <pre style={{ padding: '1rem' }}>Arbitrary JSX content</pre>
    </StyledModal>
  </div>
)

NoHeader.storyName = 'No header'

export const NoButtons: Story<ModalProps> = () => (
  <div style={{ height: '10rem' }}>
    <StyledModal title="Example Title" isOpen>
      <pre style={{ padding: '1rem' }}>Arbitrary JSX content</pre>
    </StyledModal>
  </div>
)

NoButtons.storyName = 'No buttons'

export const DangerButton: Story<ModalProps> = () => {
  const primaryButtonWithoutIcon: ButtonProps = {
    ...primaryButton,
    color: BUTTON_COLOR.DANGER,
    icon: undefined,
  }

  return (
    <div style={{ height: '15rem' }}>
      <StyledModal
        title="Example Title"
        primaryButton={primaryButtonWithoutIcon}
        secondaryButton={secondaryButton}
        isOpen
      >
        <pre style={{ padding: '1rem' }}>Arbitrary JSX content</pre>
      </StyledModal>
    </div>
  )
}

DangerButton.storyName = 'Danger button with no icon'

export const NoTertiaryButton: Story<ModalProps> = () => (
  <div style={{ height: '15rem' }}>
    <StyledModal
      title="Example Title"
      primaryButton={primaryButton}
      secondaryButton={secondaryButton}
      isOpen
    >
      <pre style={{ padding: '1rem' }}>Arbitrary JSX content</pre>
    </StyledModal>
  </div>
)

NoTertiaryButton.storyName = 'No tertiary button'

export const Blank: Story<ModalProps> = () => (
  <div style={{ height: '10rem' }}>
    <StyledModal isOpen>
      <pre style={{ padding: '1rem' }}>Arbitrary JSX content</pre>
    </StyledModal>
  </div>
)

Blank.storyName = 'Blank'
