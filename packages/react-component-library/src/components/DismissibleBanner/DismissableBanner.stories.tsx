import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { DismissibleBanner } from '.'

export default {
  component: DismissibleBanner,
  title: 'Dismissible Banner',
} as Meta

export const Default = ({ description, ...rest }: any) => (
  <DismissibleBanner {...rest}>{description}</DismissibleBanner>
)

Default.args = {
  title: 'Example Title',
  description: 'Example description',
  onDismiss: (e: React.SyntheticEvent) => console.log,
}

export const HiddenCheckbox = () => (
  <DismissibleBanner
    onDismiss={(e: React.SyntheticEvent) => console.log}
    hasCheckbox={false}
    title="Example Title"
  >
    Example description
  </DismissibleBanner>
)

HiddenCheckbox.storyName = 'Hidden checkbox'
