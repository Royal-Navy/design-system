import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { Alert, ALERT_VARIANT } from './index'

export default {
  component: Alert,
  title: 'Components/Alert',
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(ALERT_VARIANT),
    },
  },
} as Meta<typeof Alert>

export const Default: StoryFn<typeof Alert> = ({
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

export const WithoutTitle: StoryFn<typeof Alert> = ({ children, variant }) => (
  <Alert variant={variant}>{children}</Alert>
)
WithoutTitle.args = {
  children:
    'The alert description provides context to the user, bringing attention to information that needs to be consumed.',
  variant: ALERT_VARIANT.INFO,
}
WithoutTitle.storyName = 'Without title'

export const ArbitraryContent: StoryFn<typeof Alert> = ({
  title,
  children,
  variant,
}) => (
  <Alert variant={variant} title={title}>
    {children}
  </Alert>
)
ArbitraryContent.args = {
  title: 'Example Title',
  children: (
    <div>
      <p>
        <strong>Using arbitrary JSX as content.</strong>
      </p>
    </div>
  ),
  variant: ALERT_VARIANT.INFO,
}
ArbitraryContent.storyName = 'Arbitrary content'

export const HideDismiss: StoryFn<typeof Alert> = ({
  title,
  children,
  variant,
}) => (
  <Alert title={title} variant={variant} hideDismiss>
    {children}
  </Alert>
)
HideDismiss.args = {
  title: 'Example Title',
  children:
    'The alert description provides context to the user, bringing attention to information that needs to be consumed.',
  variant: ALERT_VARIANT.INFO,
}
HideDismiss.storyName = 'Hide dismiss button'
