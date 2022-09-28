import React from 'react'
import styled from 'styled-components'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Modal } from './index'
import { StyledMain } from './partials/StyledMain'
import { StyledModal } from './partials/StyledModal'
import { ButtonProps, BUTTON_VARIANT } from '../Button'

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
} as ComponentMeta<typeof Modal>

const primaryButton: ButtonProps = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: () => {},
  children: 'Primary',
}

const secondaryButton: ButtonProps = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: () => {},
  children: 'Secondary',
}

const tertiaryButton: ButtonProps = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: () => {},
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

const Template: ComponentStory<typeof Modal> = (args) => (
  <Wrapper $height={args.title && args.primaryButton ? '17rem' : '12rem'}>
    <Modal {...args}>
      <pre css={{ padding: '1rem' }}>Arbitrary JSX content</pre>
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
  'aria-label': 'Modal with no header',
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
    variant: BUTTON_VARIANT.DANGER,
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
  'aria-label': 'Blank modal',
}
Blank.storyName = 'Blank'
