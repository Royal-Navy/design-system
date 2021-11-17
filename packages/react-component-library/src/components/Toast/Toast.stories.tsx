import React from 'react'
import { Story, Meta } from '@storybook/react'
import { useToasts, Options } from 'react-toast-notifications'

import { ToastProvider, Toast, ToastProps } from '.'
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
} as Meta

const LABEL = 'Example label'
const DESCRIPTION = 'This is an example toast message'
const DATE_TIME = new Date('Tue, 18 Feb 2020 14:36:43 GMT')

export const Default: Story<Options> = (props) => {
  const ToastButton: React.FC<Options> = ({
    appearance = 'info',
    autoDismiss = false,
    onDismiss,
  }) => {
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

  return (
    <ToastProvider>
      <ToastButton {...props} />
    </ToastProvider>
  )
}

Default.args = {}

export const AutoDismiss: Story<Options> = (props) => {
  const ToastButton: React.FC<Options> = ({
    appearance = 'info',
    autoDismiss = false,
    onDismiss,
  }) => {
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

  return (
    <ToastProvider>
      <ToastButton {...props} appearance="info" autoDismiss />
    </ToastProvider>
  )
}

AutoDismiss.storyName = 'Auto dismiss'

export const ComponentOnly: Story<ToastProps> = (props) => (
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

export const Danger: Story<ToastProps> = (props) => (
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

Danger.storyName = 'Danger'

export const Success: Story<ToastProps> = (props) => (
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

Success.storyName = 'Success'

export const Warning: Story<ToastProps> = (props) => (
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

Warning.storyName = 'Warning'
