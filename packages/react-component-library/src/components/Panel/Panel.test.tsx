import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Panel } from './index'

describe('Panel', () => {
  let wrapper: RenderResult

  beforeEach(() => {
    wrapper = render(
      <Panel data-arbitrary="arbitrary">Content</Panel>
    )
  })

  it('should render the content', () => {
    expect(wrapper.getByText('Content')).toBeTruthy()
  })

  it('should spread arbitrary props', () => {
    expect(wrapper.getByTestId('panel')).toHaveAttribute(
      'data-arbitrary',
      'arbitrary'
    )
  })
})
