import React, { useEffect } from 'react'
import { Meta, StoryFn } from '@storybook/react'

import { TOAST_APPEARANCE, Toast, ToastProps, showToast } from '.'
import { Button } from '../Button'

export default {
  component: Toast,
  title: 'Components/Toast',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
  argTypes: {
    appearance: {
      control: 'select',
      options: Object.values(TOAST_APPEARANCE),
    },
  },
} as Meta<typeof Toast>

const LABEL = 'Hello, World!'
const DESCRIPTION =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi nec, lacinia ipsum.'
const DATE_TIME = new Date('Tue, 18 Feb 2020 14:36:43 GMT')

const ToastButton = (props: ToastProps) => {
  useEffect(() => {
    showToast(DESCRIPTION, Infinity)
  })

  return (
    <div style={{ minHeight: '10rem' }}>
      <Toast {...props} />
      <Button
        onClick={(_: React.FormEvent<HTMLButtonElement>) => {
          showToast(DESCRIPTION)
        }}
      >
        Show Toast
      </Button>
    </div>
  )
}

export const Default: StoryFn<typeof Toast> = ({
  dateTime,
  label,
  appearance,
}) => <ToastButton dateTime={dateTime} label={label} appearance={appearance} />

Default.args = {
  dateTime: DATE_TIME,
  label: LABEL,
  appearance: TOAST_APPEARANCE.INFO,
}
