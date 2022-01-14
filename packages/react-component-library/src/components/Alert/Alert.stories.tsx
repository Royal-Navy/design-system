import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Alert, ALERT_VARIANT } from './index'

export default { component: Alert, title: 'Alert' } as ComponentMeta<
  typeof Alert
>

export const Default: ComponentStory<typeof Alert> = ({
  title,
  children,
  variant,
}) => (
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

export const WithoutTitle: ComponentStory<typeof Alert> = ({
  children,
  variant,
}) => <Alert variant={variant}>{children}</Alert>

WithoutTitle.args = {
  children:
    'The alert description provides context to the user, bringing attention to information that needs to be consumed.',
  variant: ALERT_VARIANT.INFO,
}

WithoutTitle.storyName = 'Without title'
