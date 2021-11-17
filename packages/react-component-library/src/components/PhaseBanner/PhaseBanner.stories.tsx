import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { PhaseBanner, PhaseBannerProps } from '.'

export default {
  component: PhaseBanner,
  title: 'Phase Banner',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
} as Meta

export const Default: Story<PhaseBannerProps> = (props) => (
  <PhaseBanner {...props} />
)

export const Beta: Story<PhaseBannerProps> = () => <PhaseBanner phase="beta" />

Beta.storyName = 'Beta'

export const CustomLink: Story<PhaseBannerProps> = () => (
  <PhaseBanner link="#" />
)

CustomLink.storyName = 'Custom link'

export const CustomText: Story<PhaseBannerProps> = () => (
  <PhaseBanner>
    Custom html can go here. <strong>This part is in bold!</strong>
  </PhaseBanner>
)

CustomText.storyName = 'Custom text'

export const FullWidth: Story<PhaseBannerProps> = () => (
  <PhaseBanner isFullWidth />
)

FullWidth.storyName = 'Full width'
