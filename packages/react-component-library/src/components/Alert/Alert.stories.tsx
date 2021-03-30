import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { Alert, ALERT_VARIANT } from './index'

export default { component: Alert, title: 'Alert' } as Meta

export const Default = ({ title, description, variant }: any) => (
  <Alert title={title} variant={variant}>
    {description}
  </Alert>
)

Default.args = {
  title: 'Example Title',
  description:
    'The alert description provides context to the user, bringing attention to information that needs to be consumed.',
  variant: ALERT_VARIANT.INFO,
}

export const WithoutTitle = ({ description, variant }: any) => (
  <Alert variant={variant}>{description}</Alert>
)

WithoutTitle.args = {
  description:
    'The alert description provides context to the user, bringing attention to information that needs to be consumed.',
  variant: ALERT_VARIANT.INFO,
}

WithoutTitle.storyName = 'Without title'
