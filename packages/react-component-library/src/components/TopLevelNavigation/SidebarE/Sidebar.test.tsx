import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, RenderResult } from '@testing-library/react'

import { Sidebar } from '.'

describe('Sidebar', () => {
  let wrapper: RenderResult

  describe('when composed with minimal props', () => {
    beforeEach(() => {
      wrapper = render(<Sidebar />)
    })
  })
})
