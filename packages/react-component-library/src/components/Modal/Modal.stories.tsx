import React, { useRef, useEffect } from 'react'
import { StoryFn, Meta } from '@storybook/react'
import styled from 'styled-components'
import { spacing } from '@royalnavy/design-tokens'
import noop from 'lodash/noop'

import { Modal, ModalProps, ModalImperativeHandle } from '.'
import { Button, ButtonProps, BUTTON_VARIANT } from '../Button'
import { useIsInDocs } from '../../../.storybook/hooks/useIsInDocs'
import { storyAccessibilityConfig } from '../../a11y/storyAccessibilityConfig'

const disableColorContrastRule = {
  a11y: {
    config: {
      rules: storyAccessibilityConfig.Modal,
    },
  },
}

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
  const isInDocs = useIsInDocs()

  useEffect(() => {
    if (ref.current && isInDocs) {
      ref?.current?.close()
    } else {
      ref?.current?.open()
    }
  })

  return (
    <StyledWrapper>
      <Button onClick={() => ref?.current?.open()}>Open Modal</Button>
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
}

export const NoHeader = Template.bind({})
NoHeader.parameters = disableColorContrastRule
NoHeader.args = {
  'aria-label': 'Modal with no header',
  primaryButton,
  secondaryButton,
  tertiaryButton,
}
NoHeader.storyName = 'No header'

export const NoButtons = Template.bind({})
NoButtons.args = {
  title: 'Example Title',
}
NoButtons.storyName = 'No buttons'

export const DangerButton = Template.bind({})
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

export const NoTertiaryButton = Template.bind({})
NoTertiaryButton.args = {
  title: 'Example Title',
  primaryButton,
  secondaryButton,
}
NoTertiaryButton.storyName = 'No tertiary button'

export const Blank = Template.bind({})
Blank.args = {
  'aria-label': 'Blank modal',
}
