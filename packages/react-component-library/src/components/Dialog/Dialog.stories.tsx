import React, { useRef, useEffect } from 'react'
import { StoryFn, Meta } from '@storybook/react'
import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { Dialog, DialogProps } from '.'
import { ModalImperativeHandle } from '../Modal'
import { Button } from '../Button'
import { useIsInDocs } from '../../hooks/useIsInDocs'

const { spacing } = selectors

export default {
  component: Dialog,
  title: 'Components/Dialog',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
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
    }
  })

  return (
    <StyledWrapper>
      <Button onClick={() => ref?.current?.show()}>Open Dialog</Button>
      <Dialog {...props} ref={ref} />
    </StyledWrapper>
  )
}

const Template: StoryFn<typeof Dialog> = (args) => <Example {...args} />

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
