import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Alert, AlertProps, ALERT_VARIANT } from './index'

export default { component: Alert, title: 'Alert' } as Meta

export const Default: Story<AlertProps> = ({ title, children, variant }) => (
  <Alert title={title} variant={variant}>
    {children}
  </Alert>
)

Default.args = {
  title: 'Example Title',
  children:
    'The alert description provides context to the user, bringing attention to information that needs to be consumed.',
  variant: ALERT_VARIANT.INFO,
}

export const WithoutTitle: Story<AlertProps> = ({ children, variant }) => (
  <Alert variant={variant}>{children}</Alert>
)

WithoutTitle.args = {
  children:
    'The alert description provides context to the user, bringing attention to information that needs to be consumed.',
  variant: ALERT_VARIANT.INFO,
}

WithoutTitle.storyName = 'Without title'
