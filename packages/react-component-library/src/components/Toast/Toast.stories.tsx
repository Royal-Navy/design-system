import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { useToasts, Options } from 'react-toast-notifications'

import { ToastProvider, Toast } from '.'
import { Button } from '../Button'

export default {
  component: Toast,
  subcomponents: { ToastProvider },
  title: 'Toast',
} as Meta

const LABEL = 'Example label'
const DESCRIPTION = 'This is an example toast message'
const DATE_TIME = new Date('Tue, 18 Feb 2020 14:36:43 GMT')

export const Default = (props: any) => {
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

Default.args = {
  onDismiss: (message?: string) => console.log,
}

export const AutoDismiss = () => {
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
      <ToastButton
        appearance="info"
        onDismiss={(message?: string, ...rest) => console.log}
        autoDismiss
      />
    </ToastProvider>
  )
}

AutoDismiss.storyName = 'Auto dismiss'

export const ComponentOnly = () => (
  <Toast
    appearance="info"
    autoDismiss={false}
    autoDismissTimeout={300}
    isRunning={false}
    onDismiss={(message?: string) => console.log}
    onMouseEnter={() => console.log('onMouseEnter')}
    onMouseLeave={() => console.log('onMouseLeave')}
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

export const Danger = () => (
  <Toast
    appearance="error"
    autoDismiss={false}
    autoDismissTimeout={300}
    isRunning={false}
    onDismiss={(message?: string) => console.log}
    onMouseEnter={() => console.log('onMouseEnter')}
    onMouseLeave={() => console.log('onMouseLeave')}
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

export const Success = () => (
  <Toast
    appearance="success"
    autoDismiss={false}
    autoDismissTimeout={300}
    isRunning={false}
    onDismiss={(message?: string) => console.log}
    onMouseEnter={() => console.log('onMouseEnter')}
    onMouseLeave={() => console.log('onMouseLeave')}
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

export const Warning = () => (
  <Toast
    appearance="warning"
    autoDismiss={false}
    autoDismissTimeout={300}
    isRunning={false}
    onDismiss={(message?: string) => console.log}
    onMouseEnter={() => console.log('onMouseEnter')}
    onMouseLeave={() => console.log('onMouseLeave')}
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
