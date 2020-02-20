import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { CardFrame } from './index'

describe('CardFrame', () => {
  let wrapper: RenderResult

  beforeEach(() => {
    wrapper = render(<CardFrame className="example-class">Content</CardFrame>)
  })

  it('should render the content', () => {
    expect(wrapper.getByText('Content')).toBeTruthy()
  })

  it('should apply the injected custom class', () => {
    expect(wrapper.getByTestId('cardframe-wrapper').classList).toContain(
      'example-class'
    )
  })
})
