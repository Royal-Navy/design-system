import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { useToasts, Options } from 'react-toast-notifications'

import { ToastProvider, Toast } from '.'

const stories = storiesOf('Toast', module)
const dangerStories = storiesOf('Toast/Examples/Danger', module)
const successStories = storiesOf('Toast/Examples/Success', module)
const warningStories = storiesOf('Toast/Examples/Warning', module)
stories.addDecorator(withKnobs)

const LABEL = 'Example label'
const DESCRIPTION = 'This is an example toast message'
const DATE_TIME = new Date('Tue, 18 Feb 2020 14:36:43 GMT')

const ToastButton: React.FC<Options> = ({
  appearance = 'info',
  autoDismiss = false,
  onDismiss,
}) => {
  const { addToast } = useToasts()

  return (
    <button
      onClick={_ => {
        addToast(text('Description', DESCRIPTION), {
          label: text('Label', LABEL),
          appearance,
          autoDismiss,
          onDismiss,
        })
      }}
    >
      Add Toast
    </button>
  )
}

stories.add('Default', () => {
  return (
    <ToastProvider>
      <ToastButton appearance="info" onDismiss={action('onDismiss')} />
    </ToastProvider>
  )
})

stories.add('Auto dismiss', () => {
  return (
    <ToastProvider>
      <ToastButton
        appearance="info"
        onDismiss={action('onDismiss')}
        autoDismiss
      />
    </ToastProvider>
  )
})

stories.add('Component only', () => {
  return (
    <Toast
      appearance="info"
      autoDismiss={false}
      autoDismissTimeout={300}
      isRunning={false}
      onDismiss={action('onDismiss')}
      onMouseEnter={action('onMouseEnter')}
      onMouseLeave={action('onMouseLeave')}
      placement="top-right"
      transitionDuration={300}
      transitionState="entered"
      label={text('Label', LABEL)}
      dateTime={DATE_TIME}
    >
      {text('Description', DESCRIPTION)}
    </Toast>
  )
})

dangerStories.add('Default', () => {
  return (
    <ToastProvider>
      <ToastButton
        appearance="error"
        onDismiss={action('onDismiss')}
        autoDismiss
      />
    </ToastProvider>
  )
})

dangerStories.add('Component only', () => {
  return (
    <Toast
      appearance="error"
      autoDismiss={false}
      autoDismissTimeout={300}
      isRunning={false}
      onDismiss={action('onDismiss')}
      onMouseEnter={action('onMouseEnter')}
      onMouseLeave={action('onMouseLeave')}
      placement="top-right"
      transitionDuration={300}
      transitionState="entered"
      label={text('Label', LABEL)}
      dateTime={DATE_TIME}
    >
      {text('Description', DESCRIPTION)}
    </Toast>
  )
})

successStories.add('Default', () => {
  return (
    <ToastProvider>
      <ToastButton
        appearance="success"
        onDismiss={action('onDismiss')}
        autoDismiss
      />
    </ToastProvider>
  )
})

successStories.add('Component only', () => {
  return (
    <Toast
      appearance="success"
      autoDismiss={false}
      autoDismissTimeout={300}
      isRunning={false}
      onDismiss={action('onDismiss')}
      onMouseEnter={action('onMouseEnter')}
      onMouseLeave={action('onMouseLeave')}
      placement="top-right"
      transitionDuration={300}
      transitionState="entered"
      label={text('Label', LABEL)}
      dateTime={DATE_TIME}
    >
      {text('Description', DESCRIPTION)}
    </Toast>
  )
})

warningStories.add('Default', () => {
  return (
    <ToastProvider>
      <ToastButton
        appearance="warning"
        onDismiss={action('onDismiss')}
        autoDismiss
      />
    </ToastProvider>
  )
})

warningStories.add('Component only', () => {
  return (
    <Toast
      appearance="warning"
      autoDismiss={false}
      autoDismissTimeout={300}
      isRunning={false}
      onDismiss={action('onDismiss')}
      onMouseEnter={action('onMouseEnter')}
      onMouseLeave={action('onMouseLeave')}
      placement="top-right"
      transitionDuration={300}
      transitionState="entered"
      label={text('Label', LABEL)}
      dateTime={DATE_TIME}
    >
      {text('Description', DESCRIPTION)}
    </Toast>
  )
})
