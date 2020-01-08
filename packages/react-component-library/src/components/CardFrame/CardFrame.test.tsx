import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { CardFrame } from './index'

describe('CardFrame', () => {
  let wrapper: RenderResult

  beforeEach(() => {
    wrapper = render(
      <CardFrame>Content</CardFrame>
    )
  })

  it('should render the div', () => {
    expect(wrapper.container.tagName).toEqual('DIV')
  })

  it('should render the content', () => {
    expect(wrapper.getByText('Content')).toBeTruthy()
  })
})
