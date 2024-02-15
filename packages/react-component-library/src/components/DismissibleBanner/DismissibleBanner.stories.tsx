import React from 'react'
import { Meta, Story } from '@storybook/react'

import { DismissibleBanner, DismissibleBannerWithTitleProps } from '.'

export default {
  component: DismissibleBanner,
  title: 'Dismissible Banner',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta<typeof DismissibleBanner>

export const Default: Story<DismissibleBannerWithTitleProps> = ({
  children,
  ...rest
}) => <DismissibleBanner {...rest}>{children}</DismissibleBanner>

Default.args = {
  title: 'Example Title',
  children: 'Example description',
}

export const HiddenCheckbox: Story<DismissibleBannerWithTitleProps> = (
  props
) => (
  <DismissibleBanner {...props} hasCheckbox={false} title="Example Title">
    Example description
  </DismissibleBanner>
)

HiddenCheckbox.storyName = 'Hidden checkbox'
