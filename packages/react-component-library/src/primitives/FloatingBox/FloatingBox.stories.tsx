import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { FloatingBox } from './FloatingBox'
import { FLOATING_BOX_ARROW_POSITION, FLOATING_BOX_SCHEME } from './constants'

const stories = storiesOf('Primitives/FloatingBox', module)

stories.addDecorator(withKnobs)

stories.add('Dark', () => (
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
))

stories.add('Light', () => (
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
))
