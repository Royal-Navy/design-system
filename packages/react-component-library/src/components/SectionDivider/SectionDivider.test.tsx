import React from 'react'

import { render, RenderResult } from '@testing-library/react'

import { SectionDivider } from '.'

describe('SectionDivider', () => {
  let wrapper: RenderResult

  describe('with title', () => {
    beforeEach(() => {
      wrapper = render(
        <SectionDivider title="Example title" className="example-class" />
      )
    })

    it('renders the title text', () => {
      expect(wrapper.queryByText('Example title')).toBeInTheDocument()
    })

    it('does not render the description text', () => {
      expect(wrapper.queryByText('Example description')).not.toBeInTheDocument()
    })

    it('drills the supplied className prop to the outer element', () => {
      expect(wrapper.getByText('Example title').parentElement).toHaveClass(
        'example-class'
      )
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

  describe('with icon', () => {
    beforeEach(() => {
      wrapper = render(
        <SectionDivider
          icon={<svg data-testid="example-icon" />}
          title="Example title"
        >
          Example description
        </SectionDivider>
      )
    })

    it('renders the icon', () => {
      expect(wrapper.queryByTestId('example-icon')).toBeInTheDocument()
    })

    it('renders the title text', () => {
      expect(wrapper.queryByText('Example title')).toBeInTheDocument()
    })
  })

  describe('without icon', () => {
    beforeEach(() => {
      wrapper = render(<SectionDivider title="Example title" />)
    })

    it('does not render an icon', () => {
      expect(
        wrapper.queryByTestId('sectiondivider-icon')
      ).not.toBeInTheDocument()
    })
  })
})
