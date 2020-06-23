import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { DismissibleBanner } from '.'

describe('DismissibleBanner', () => {
  let wrapper: RenderResult
  let onDismissSpy: jest.SpyInstance

  describe('default props', () => {
    beforeEach(() => {
      const props = {
        children: 'content',
        title: 'title',
        onDismiss: () => true,
      }

      onDismissSpy = jest.spyOn(props, 'onDismiss')

      wrapper = render(<DismissibleBanner {...props} />)
    })

    it('should render the title', () => {
      expect(wrapper.getByTestId('dimissablebanner-title')).toHaveTextContent(
        'title'
      )
    })

    it('should render the content', () => {
      expect(
        wrapper.getByTestId('dimissablebanner-description')
      ).toHaveTextContent('content')
    })

    describe('when the component is dismissed', () => {
      beforeEach(() => {
        wrapper.getByText('Dismiss').click()
      })

      it('should call the `onDismiss` callback', () => {
        expect(onDismissSpy).toHaveBeenCalledTimes(1)
        expect(onDismissSpy.mock.calls[0][1]).toEqual(true)
      })
    })

    describe("when the `Don't show this again` checkbox is clicked before the component is dismissed", () => {
      beforeEach(() => {
        wrapper.getByTestId('checkbox').click()
        wrapper.getByText('Dismiss').click()
      })

      it('should call the `onDismiss` callback', () => {
        expect(onDismissSpy).toHaveBeenCalledTimes(1)
        expect(onDismissSpy.mock.calls[0][1]).toEqual(false)
      })
    })
  })

  describe('arbitrary content', () => {
    beforeEach(() => {
      const props = {
        children: <div>arbitrary content</div>,
        onDismiss: () => true,
      }

      wrapper = render(<DismissibleBanner {...props} />)
    })

    it('should render the title', () => {
      expect(wrapper.queryAllByTestId('dimissablebanner-title')).toHaveLength(0)
    })

    it('should render the content', () => {
      expect(
        wrapper.queryAllByTestId('dimissablebanner-description')
      ).toHaveLength(0)
    })

    it('should render the arbitrary content', () => {
      expect(wrapper.getByText('arbitrary content')).toBeInTheDocument()
    })
  })

  describe('without checkbox', () => {
    beforeEach(() => {
      const props = {
        children: 'content',
        hasCheckbox: false,
        title: 'title',
        onDismiss: () => true,
      }

      wrapper = render(<DismissibleBanner {...props} />)
    })

    it("should not render the `Don't show this again` checkbox", () => {
      expect(wrapper.queryAllByTestId('checkbox')).toHaveLength(0)
    })
  })
})
