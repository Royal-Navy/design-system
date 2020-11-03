import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { FloatingBox } from './FloatingBox'
import { FLOATING_BOX_ARROW_POSITION, FLOATING_BOX_SCHEME } from './constants'

export default { component: FloatingBox, title: 'FloatingBox' } as Meta

export const Dark = () => (
  <FloatingBox
    width={300}
    height={200}
    top={100}
    left={100}
    scheme={FLOATING_BOX_SCHEME.DARK}
    position={FLOATING_BOX_ARROW_POSITION.BOTTOM_RIGHT}
  >
    <div style={{ padding: '0 1rem' }}>
      <pre>This is some arbitrary JSX</pre>
    </div>
  </FloatingBox>
)
Dark.storyName = 'Dark'

export const Light = () => (
  <FloatingBox
    width={300}
    height={200}
    top={100}
    left={100}
    scheme={FLOATING_BOX_SCHEME.LIGHT}
    position={FLOATING_BOX_ARROW_POSITION.BOTTOM_RIGHT}
  >
    <div style={{ padding: '0 1rem' }}>
      <pre>This is some arbitrary JSX</pre>
    </div>
  </FloatingBox>
)
Light.storyName = 'Light'
