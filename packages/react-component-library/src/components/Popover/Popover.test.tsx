import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { Popover } from '.'

describe('Popover', () => {
  let wrapper: RenderResult

  beforeEach(() => {
    wrapper = render(
      <Popover>
        <pre>Arbitraty JSX content</pre>
      </Popover>
    )
  })

  it('does something', () => {
    expect(true).toBe(true)
  })
})
