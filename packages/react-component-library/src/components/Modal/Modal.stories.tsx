import React, { useRef } from 'react'
import { StoryFn, Meta } from '@storybook/react'
import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'
import noop from 'lodash/noop'

import { Modal, ModalProps, ModalImperativeHandle } from '.'
import { Button, ButtonProps, BUTTON_VARIANT } from '../Button'

const { spacing } = selectors

export default {
  component: Modal,
  title: 'Components/Modal',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
    jsx: {
      showFunctions: true,
    },
  },
} as Meta<typeof Modal>

const primaryButton: ButtonProps = {
  onClick: noop,
  children: 'Primary',
}

const secondaryButton: ButtonProps = {
  onClick: noop,
  children: 'Secondary',
}

const tertiaryButton: ButtonProps = {
  onClick: noop,
  children: 'Tertiary',
}

const StyledWrapper = styled.div`
  padding: ${spacing('8')};
`

const Example = (props: ModalProps) => {
  const ref = useRef<ModalImperativeHandle>(null)

  return (
    <StyledWrapper>
      <Button onClick={() => ref?.current?.show()}>Open Modal</Button>
      <Modal {...props} ref={ref}>
        <pre css={{ padding: '1rem' }}>Arbitrary JSX content</pre>
      </Modal>
    </StyledWrapper>
  )
}

const Template: StoryFn<typeof Modal> = (args) => <Example {...args} />

export const Default = Template.bind({})
Default.args = {
  titleId: undefined,
  descriptionId: undefined,
  title: 'Example Title',
  primaryButton,
  secondaryButton,
  tertiaryButton,
  isOpen: true,
}

const NoHeader: StoryFn<typeof Modal> = (args) => <Example {...args} />
NoHeader.args = {
  'aria-label': 'Modal with no header',
  primaryButton,
  secondaryButton,
  tertiaryButton,
}
NoHeader.storyName = 'No header'

const NoButtons: StoryFn<typeof Modal> = (args) => <Example {...args} />
NoButtons.args = {
  title: 'Example Title',
}
NoButtons.storyName = 'No buttons'

const DangerButton: StoryFn<typeof Modal> = (args) => <Example {...args} />
DangerButton.args = {
  title: 'Example Title',
  primaryButton: {
    ...primaryButton,
    variant: BUTTON_VARIANT.DANGER,
    icon: undefined,
  },
  secondaryButton,
}
DangerButton.storyName = 'Danger button with no icon'

const NoTertiaryButton: StoryFn<typeof Modal> = (args) => <Example {...args} />
NoTertiaryButton.args = {
  title: 'Example Title',
  primaryButton,
  secondaryButton,
}
NoTertiaryButton.storyName = 'No tertiary button'

const Blank: StoryFn<typeof Modal> = (args) => <Example {...args} />
Blank.args = {
  'aria-label': 'Blank modal',
}
