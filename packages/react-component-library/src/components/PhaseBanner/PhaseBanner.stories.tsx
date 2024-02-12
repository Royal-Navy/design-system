import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { PhaseBanner } from '.'

export default {
  component: PhaseBanner,
  title: 'Phase Banner',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
} as Meta<typeof PhaseBanner>

export const Default: StoryFn<typeof PhaseBanner> = (props) => (
  <PhaseBanner {...props} />
)

export const Beta: StoryFn<typeof PhaseBanner> = () => (
  <PhaseBanner phase="beta" />
)

export const CustomLink: StoryFn<typeof PhaseBanner> = () => (
  <PhaseBanner link="#" />
)

CustomLink.storyName = 'Custom link'

export const CustomText: StoryFn<typeof PhaseBanner> = () => (
  <PhaseBanner>
    Custom html can go here. <strong>This part is in bold!</strong>
  </PhaseBanner>
)

CustomText.storyName = 'Custom text'

export const FullWidth: StoryFn<typeof PhaseBanner> = () => (
  <PhaseBanner isFullWidth />
)

FullWidth.storyName = 'Full width'
