import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { Alert, ALERT_VARIANT } from './index'

export default { component: Alert, title: 'Alert' } as Meta

export const Default = ({ title, children, variant }: any) => (
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

export const WithoutTitle = ({ children, variant }: any) => (
  <Alert variant={variant}>{children}</Alert>
)

WithoutTitle.args = {
  children:
    'The alert description provides context to the user, bringing attention to information that needs to be consumed.',
  variant: ALERT_VARIANT.INFO,
}

WithoutTitle.storyName = 'Without title'
