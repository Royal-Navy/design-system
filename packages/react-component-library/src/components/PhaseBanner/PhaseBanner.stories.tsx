import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PhaseBanner } from '.'

export default {
  component: PhaseBanner,
  title: 'Phase Banner',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof PhaseBanner>

export const Default: ComponentStory<typeof PhaseBanner> = (props) => (
  <PhaseBanner {...props} />
)

export const Beta: ComponentStory<typeof PhaseBanner> = () => (
  <PhaseBanner phase="beta" />
)

Beta.storyName = 'Beta'

export const CustomLink: ComponentStory<typeof PhaseBanner> = () => (
  <PhaseBanner link="#" />
)

CustomLink.storyName = 'Custom link'

export const CustomText: ComponentStory<typeof PhaseBanner> = () => (
  <PhaseBanner>
    Custom html can go here. <strong>This part is in bold!</strong>
  </PhaseBanner>
)

CustomText.storyName = 'Custom text'

export const FullWidth: ComponentStory<typeof PhaseBanner> = () => (
  <PhaseBanner isFullWidth />
)

FullWidth.storyName = 'Full width'
