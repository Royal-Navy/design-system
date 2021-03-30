import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { PhaseBanner } from '.'

export default { component: PhaseBanner, title: 'Phase Banner' } as Meta

export const Default = (props: any) => <PhaseBanner {...props} />

export const Beta = () => <PhaseBanner phase="beta" />

Beta.storyName = 'Beta'

export const CustomLink = () => <PhaseBanner link="#" />

CustomLink.storyName = 'Custom link'

export const CustomText = () => (
  <PhaseBanner>
    Custom html can go here. <strong>This part is in bold!</strong>
  </PhaseBanner>
)

CustomText.storyName = 'Custom text'

export const FullWidth = () => <PhaseBanner isFullWidth />

FullWidth.storyName = 'Full width'
