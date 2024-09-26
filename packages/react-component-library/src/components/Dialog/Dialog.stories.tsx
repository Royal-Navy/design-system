import React, { useEffect, useRef } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { color, spacing } from '@royalnavy/design-tokens'
import styled from 'styled-components'

import { Dialog, DialogProps } from '.'
import { ModalImperativeHandle } from '../Modal'
import { Button } from '../Button'
import { useIsInDocs } from '../../../.storybook/hooks/useIsInDocs'

export default {
  component: Dialog,
  title: 'Components/Dialog',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
  argTypes: {
    description: {
      control: 'select',
      options: ['Plain text', 'ReactNode'],

      mapping: {
        ReactNode: (
          <p style={{ textAlign: 'justify' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <i>tempor incididunt ut labore et dolore magna</i> aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            <strong> nisi ut aliquip ex ea commodo </strong>. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur.{' '}
            <span style={{ color: color('warning', '800') }}>
              Excepteur sint occaecat cupidatat
            </span>{' '}
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        ),
      },
    },
  },
} as Meta<typeof Dialog>

const StyledWrapper = styled.div`
  padding: ${spacing('8')};
`

const Example = (props: DialogProps) => {
  const ref = useRef<ModalImperativeHandle>(null)
  const isInDocs = useIsInDocs()

  useEffect(() => {
    if (ref.current && isInDocs) {
      ref?.current?.close()
    } else {
      ref?.current?.open()
    }
  })

  const dismissDialog = () => {
    ref?.current?.close()
  }

  return (
    <StyledWrapper>
      <Button onClick={() => ref?.current?.open()}>Open Dialog</Button>
      <Dialog
        ref={ref}
        onCancel={dismissDialog}
        onConfirm={dismissDialog}
        {...props}
      />
    </StyledWrapper>
  )
}

const Template: StoryFn<typeof Dialog> = (args) => <Example {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Example Title',
  description: 'Example description',
}

export const Danger = Template.bind({})
Danger.args = {
  title: 'Example Title',
  description: 'Example description',
  isDanger: true,
}

export const RichDescription = Template.bind({})
RichDescription.storyName = 'Rich description'
RichDescription.args = {
  title: 'Example Title',
  description: (
    <div>
      Support Arbitrary JSX for <strong>rich</strong> description text.
    </div>
  ),
}

export const AsyncAction = Template.bind({})
AsyncAction.storyName = 'Async action'
AsyncAction.args = {
  title: 'Example Title',
  description: 'Example description',
  onConfirm: () =>
    new Promise((resolve) => {
      setTimeout(resolve, 2000)
    }),
}
