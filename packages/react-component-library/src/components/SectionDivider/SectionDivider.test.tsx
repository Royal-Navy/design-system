import React from 'react'

import { render, RenderResult } from '@testing-library/react'

import { SectionDivider } from '.'

describe('SectionDivider', () => {
  let wrapper: RenderResult

  describe('with title', () => {
    beforeEach(() => {
      wrapper = render(<SectionDivider title="Example title" />)
    })

    it('renders the title text', () => {
      expect(wrapper.queryByText('Example title')).toBeInTheDocument()
    })

    it('does not render the description text', () => {
      expect(wrapper.queryByText('Example description')).not.toBeInTheDocument()
    })
  })

  describe('with description', () => {
    beforeEach(() => {
      wrapper = render(
        <SectionDivider title="Example title">
          Example description
        </SectionDivider>
      )
    })

    it('renders the description text', () => {
      expect(wrapper.queryByText('Example description')).toBeInTheDocument()
    })
  })
})
