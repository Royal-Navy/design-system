import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { FloatingBox, FloatingBoxProps } from './FloatingBox'
import { FLOATING_BOX_SCHEME } from './constants'

export default {
  component: FloatingBox,
  title: 'Floating Box',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta

export const Default: Story<FloatingBoxProps> = (props) => (
  <FloatingBox isVisible renderTarget={<div />} {...props}>
    <div style={{ padding: '0 1rem' }}>
      <pre>Arbitrary JSX content</pre>
    </div>
  </FloatingBox>
)

Default.args = {
  scheme: FLOATING_BOX_SCHEME.LIGHT,
}

export const Dark: Story<FloatingBoxProps> = (props) => (
  <FloatingBox
    isVisible
    renderTarget={<div />}
    {...props}
    scheme={FLOATING_BOX_SCHEME.DARK}
  >
    <div style={{ padding: '0 1rem' }}>
      <pre>Arbitrary JSX content</pre>
    </div>
  </FloatingBox>
)

Dark.storyName = 'Dark'
