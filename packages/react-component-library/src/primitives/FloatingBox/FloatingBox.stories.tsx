import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { FloatingBox, FloatingBoxWithEmbeddedTargetProps } from './FloatingBox'
import { FLOATING_BOX_SCHEME } from './constants'

export default {
  component: FloatingBox,
  title: 'Primitives/Floating Box',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
} as Meta<FloatingBoxWithEmbeddedTargetProps>

const Template: StoryFn<FloatingBoxWithEmbeddedTargetProps> = (props) => (
  <FloatingBox isVisible renderTarget={<div />} {...props}>
    <div css={{ padding: '0 1rem' }}>
      <pre>Arbitrary JSX content</pre>
    </div>
  </FloatingBox>
)

export const Default = Template.bind({})
Default.args = {
  scheme: FLOATING_BOX_SCHEME.LIGHT,
  'aria-label': 'A floating box',
}

export const Dark = Template.bind({})

Dark.args = {
  scheme: FLOATING_BOX_SCHEME.DARK,
  'aria-label': 'A floating box',
}
