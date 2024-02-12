import React from 'react'

import { render, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

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
      expect(wrapper.getByTestId('dimissiblebanner-title')).toHaveTextContent(
        'title'
      )
    })

    it('should render the content', () => {
      expect(
        wrapper.getByTestId('dimissiblebanner-description')
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
        wrapper.getByTestId('checkbox-input').click()
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
      expect(wrapper.queryAllByTestId('dimissiblebanner-title')).toHaveLength(0)
    })

    it('should render the content', () => {
      expect(
        wrapper.queryAllByTestId('dimissiblebanner-description')
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

  describe('with arbitrary props', () => {
    beforeEach(() => {
      const props = {
        children: 'content',
        'data-arbitrary': 'arbitrary',
        title: 'title',
        onDismiss: () => true,
      }

      wrapper = render(<DismissibleBanner {...props} />)
    })

    it('should spread arbitrary props', () => {
      expect(wrapper.getByTestId('dimissiblebanner-wrapper')).toHaveAttribute(
        'data-arbitrary',
        'arbitrary'
      )
    })
  })

  describe('when onDismiss is not set', () => {
    beforeEach(() => {
      wrapper = render(<DismissibleBanner>Content</DismissibleBanner>)
    })

    it('does not throw an error when the dismiss button is clicked', () => {
      expect(() => {
        return userEvent.click(wrapper.getByTestId('dimissiblebanner-dismiss'))
      }).not.toThrow()
    })
  })
})
