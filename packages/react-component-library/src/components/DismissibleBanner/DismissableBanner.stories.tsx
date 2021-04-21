import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { DismissibleBanner, DismissibleBannerProps } from '.'

export default {
  component: DismissibleBanner,
  title: 'Dismissible Banner',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta

export const Default: Story<any> = ({ children, ...rest }) => (
  <DismissibleBanner {...rest}>{children}</DismissibleBanner>
)

Default.args = {
  title: 'Example Title',
  children: 'Example description',
}

export const HiddenCheckbox: Story<any> = (props) => (
  <DismissibleBanner {...props} hasCheckbox={false} title="Example Title">
    Example description
  </DismissibleBanner>
)

HiddenCheckbox.storyName = 'Hidden checkbox'
