import React from 'react'
import styled from 'styled-components'
import { Meta } from '@storybook/react/types-6-0'

import { Modal } from './index'
import { StyledMain } from './partials/StyledMain'
import { BUTTON_COLOR, ButtonProps } from '../Button'

export default { component: Modal, title: 'Modal' } as Meta

const primaryButton: ButtonProps = {
  onClick: (e: React.SyntheticEvent) => console.log,
  children: 'Primary',
}

const secondaryButton: ButtonProps = {
  onClick: (e: React.SyntheticEvent) => console.log,
  children: 'Secondary',
}

const tertiaryButton: ButtonProps = {
  onClick: (e: React.SyntheticEvent) => console.log,
  children: 'Tertiary',
}

const StyledModal = styled(Modal)`
  position: absolute;
  z-index: 1;

  ${StyledMain} {
    position: absolute;
  }
`

export const Default = (props: any) => (
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

export const NoHeader = () => (
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

export const NoButtons = () => (
  <div style={{ height: '10rem' }}>
    <StyledModal title="Example Title" isOpen>
      <pre style={{ padding: '1rem' }}>Arbitrary JSX content</pre>
    </StyledModal>
  </div>
)

NoButtons.storyName = 'No buttons'

export const DangerButton = () => {
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

export const NoTertiaryButton = () => (
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

export const Blank = () => (
  <div style={{ height: '10rem' }}>
    <StyledModal isOpen>
      <pre style={{ padding: '1rem' }}>Arbitrary JSX content</pre>
    </StyledModal>
  </div>
)

Blank.storyName = 'Blank'
