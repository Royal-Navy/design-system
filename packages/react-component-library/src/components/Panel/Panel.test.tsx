import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { Panel } from './index'

describe('Panel', () => {
  let wrapper: RenderResult

  beforeEach(() => {
    wrapper = render(
      <Panel>Content</Panel>
    )
  })

  it('should render the div', () => {
    expect(wrapper.container.tagName).toEqual('DIV')
  })

  it('should render the content', () => {
    expect(wrapper.getByText('Content')).toBeTruthy()
  })
})
