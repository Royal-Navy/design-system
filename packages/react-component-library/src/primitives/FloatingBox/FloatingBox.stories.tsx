import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { FloatingBox, FloatingBoxProps } from './FloatingBox'
import { FLOATING_BOX_ARROW_POSITION, FLOATING_BOX_SCHEME } from './constants'

export default {
  component: FloatingBox,
  title: 'Floating Box',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta

export const Default: Story<FloatingBoxProps> = (props) => (
  <FloatingBox {...props}>
    <div style={{ padding: '0 1rem' }}>
      <pre>Arbitrary JSX content</pre>
    </div>
  </FloatingBox>
)

Default.args = {
  width: 235,
  top: 100,
  left: 100,
  scheme: FLOATING_BOX_SCHEME.LIGHT,
  position: FLOATING_BOX_ARROW_POSITION.LEFT_BOTTOM,
}

export const Dark: Story<FloatingBoxProps> = (props) => (
  <FloatingBox
    {...props}
    width={235}
    top={100}
    left={100}
    scheme={FLOATING_BOX_SCHEME.DARK}
    position={FLOATING_BOX_ARROW_POSITION.LEFT_BOTTOM}
  >
    <div style={{ padding: '0 1rem' }}>
      <pre>Arbitrary JSX content</pre>
    </div>
  </FloatingBox>
)

Dark.storyName = 'Dark'
