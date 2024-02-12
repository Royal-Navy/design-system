import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { useToasts, Options } from 'react-toast-notifications'

import { ToastProvider, Toast } from '.'
import { Button } from '../Button'

export default {
  component: Toast,
  subcomponents: { ToastProvider },
  title: 'Toast',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    docs: {
      description: {
        component:
          'This component wraps a popular open-source library. See comprehensive documentation [here](https://github.com/jossmac/react-toast-notifications#readme).',
      },
    },
  },
} as Meta<typeof Toast>

const LABEL = 'Example label'
const DESCRIPTION = 'This is an example toast message'
const DATE_TIME = new Date('Tue, 18 Feb 2020 14:36:43 GMT')

const ToastButton = ({
  appearance = 'info',
  autoDismiss = false,
  onDismiss,
}: Options) => {
  const { addToast } = useToasts()

  return (
    <Button
      onClick={(_) => {
        addToast(DESCRIPTION, {
          label: LABEL,
          appearance,
          autoDismiss,
          onDismiss,
        })
      }}
    >
      Add Toast
    </Button>
  )
}
export const Default: StoryFn<Options> = (props) => (
  <ToastProvider>
    <ToastButton {...props} />
  </ToastProvider>
)

Default.args = {}

export const AutoDismiss: StoryFn<Options> = (props) => (
  <ToastProvider>
    <ToastButton {...props} appearance="info" autoDismiss />
  </ToastProvider>
)

AutoDismiss.storyName = 'Auto dismiss'

export const ComponentOnly: StoryFn<typeof Toast> = (props) => (
  <Toast
    {...props}
    appearance="info"
    autoDismiss={false}
    autoDismissTimeout={300}
    isRunning={false}
    placement="top-right"
    transitionDuration={300}
    transitionState="entered"
    label={LABEL}
    dateTime={DATE_TIME}
  >
    {DESCRIPTION}
  </Toast>
)

ComponentOnly.storyName = 'Component only'

export const Danger: StoryFn<typeof Toast> = (props) => (
  <Toast
    {...props}
    appearance="error"
    autoDismiss={false}
    autoDismissTimeout={300}
    isRunning={false}
    placement="top-right"
    transitionDuration={300}
    transitionState="entered"
    label={LABEL}
    dateTime={DATE_TIME}
  >
    {DESCRIPTION}
  </Toast>
)

export const Success: StoryFn<typeof Toast> = (props) => (
  <Toast
    {...props}
    appearance="success"
    autoDismiss={false}
    autoDismissTimeout={300}
    isRunning={false}
    placement="top-right"
    transitionDuration={300}
    transitionState="entered"
    label={LABEL}
    dateTime={DATE_TIME}
  >
    {DESCRIPTION}
  </Toast>
)

export const Warning: StoryFn<typeof Toast> = (props) => (
  <Toast
    {...props}
    appearance="warning"
    autoDismiss={false}
    autoDismissTimeout={300}
    isRunning={false}
    placement="top-right"
    transitionDuration={300}
    transitionState="entered"
    label={LABEL}
    dateTime={DATE_TIME}
  >
    {DESCRIPTION}
  </Toast>
)
