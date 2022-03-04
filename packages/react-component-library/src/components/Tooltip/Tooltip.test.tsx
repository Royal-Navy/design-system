import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { Tooltip, TOOLTIP_POSITION } from '.'

describe('Tooltip', () => {
  let wrapper: RenderResult

  describe('minimal props', () => {
    beforeEach(() => {
      wrapper = render(<Tooltip>Content</Tooltip>)
    })

    it('should render the tooltip without an `id` attribute', () => {
      expect(wrapper.getByTestId('tooltip')).not.toHaveAttribute('id')
    })

    it('should render the tooltip with an `aria-describedby` attribute', () => {
      const contentId = wrapper
        .getByTestId('tooltip-content')
        .getAttribute('id')

      expect(wrapper.getByTestId('tooltip')).toHaveAttribute(
        'aria-describedby',
        contentId
      )
    })

    it('should render the tooltip without an `aria-labelledby` attribute', () => {
      expect(wrapper.getByTestId('tooltip')).not.toHaveAttribute(
        'aria-labelledby'
      )
    })

    it('should render the tooltip with a `role` attribute', () => {
      expect(wrapper.getByTestId('tooltip')).toHaveAttribute('role', 'tooltip')
    })

    it('should render the tooltip without extra style', () => {
      expect(wrapper.getByTestId('tooltip')).not.toHaveAttribute('style')
    })

    it('should render the content', () => {
      expect(wrapper.getByText('Content')).toBeInTheDocument()
    })
  })

  describe('all props', () => {
    beforeEach(() => {
      wrapper = render(
        <Tooltip
          bottom={1}
          data-arbitrary="arbitrary"
          id="123"
          left={2}
          position={TOOLTIP_POSITION.BELOW}
          right={3}
          title="title"
          top={4}
          width={100}
        >
          Content
        </Tooltip>
      )
    })

    it('should spread arbitrary props', () => {
      expect(wrapper.getByTestId('tooltip')).toHaveAttribute(
        'data-arbitrary',
        'arbitrary'
      )
    })

    it('should render the tooltip with an `id` attribute', () => {
      expect(wrapper.getByTestId('tooltip')).toHaveAttribute('id', '123')
    })

    it('should render the tooltip with an `aria-describedby` attribute', () => {
      const contentId = wrapper
        .getByTestId('tooltip-content')
        .getAttribute('id')

      expect(wrapper.getByTestId('tooltip')).toHaveAttribute(
        'aria-describedby',
        contentId
      )
    })

    it('should render the tooltip with an `aria-labelledby` attribute', () => {
      const titleId = wrapper.getByText('title').getAttribute('id')

      expect(wrapper.getByTestId('tooltip')).toHaveAttribute(
        'aria-labelledby',
        titleId
      )
    })

    it('should render the tooltip with a `role` attribute', () => {
      expect(wrapper.getByTestId('tooltip')).toHaveAttribute('role', 'tooltip')
    })

    it('should render the tooltip with extra style', () => {
      expect(wrapper.getByTestId('tooltip')).toHaveStyleRule('bottom', '1px')
      expect(wrapper.getByTestId('tooltip')).toHaveStyleRule('left', '2px')
      expect(wrapper.getByTestId('tooltip')).toHaveStyleRule('right', '3px')
      expect(wrapper.getByTestId('tooltip')).toHaveStyleRule('top', '4px')
      expect(wrapper.getByTestId('tooltip')).toHaveStyleRule('width', '100px')
    })

    it('should render the title', () => {
      expect(wrapper.getByText('title')).toBeInTheDocument()
    })

    it('should render the content', () => {
      expect(wrapper.getByText('Content')).toBeInTheDocument()
    })
  })

  describe('when the default `id` is used and the content changes', () => {
    let initialTitleId: string
    let initialContentId: string

    beforeEach(() => {
      wrapper = render(<Tooltip title="Title">Initial content</Tooltip>)
      initialTitleId = wrapper.getByTestId('tooltip-title').id
      initialContentId = wrapper.getByTestId('tooltip-content').id
      wrapper.rerender(<Tooltip title="Title">New content</Tooltip>)
    })

    it('does not generate new title `id`', () => {
      expect(wrapper.getByTestId('tooltip-title')).toHaveAttribute(
        'id',
        initialTitleId
      )
    })

    it('does not generate new content `id`', () => {
      expect(wrapper.getByTestId('tooltip-content')).toHaveAttribute(
        'id',
        initialContentId
      )
    })
  })
})
