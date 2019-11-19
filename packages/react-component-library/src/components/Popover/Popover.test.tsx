import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { Popover } from '.'
import { FLOATING_BOX_PLACEMENT } from '../../primitives/FloatingBox'

describe('Popover', () => {
  let wrapper: RenderResult

  beforeEach(() => {
    wrapper = render(
      <Popover
        placement={FLOATING_BOX_PLACEMENT.BELOW}
        popoverJSX={
          <pre style={{ padding: '1rem' }}>This is some arbitrary JSX</pre>
        }
      >
        <div
          style={{
            display: 'inline-block',
            padding: '1rem',
            backgroundColor: '#c9c9c9',
          }}
        >
          Hover on me!
        </div>
      </Popover>
    )
  })

  it('does something', () => {
    expect(true).toBe(true)
  })
})
