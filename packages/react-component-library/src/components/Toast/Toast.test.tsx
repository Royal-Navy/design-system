import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult, fireEvent } from '@testing-library/react'

import { Toast } from '.'

describe('Toast', () => {
  let wrapper: RenderResult
  let onDismissSpy: (id: string) => void
  let onMouseEnterSpy: () => void
  let onMouseLeaveSpy: () => void
  const LABEL = 'Example label'
  const DESCRIPTION = 'This is an example toast message'

  describe('default props', () => {
    onDismissSpy = jest.fn()
    onMouseEnterSpy = jest.fn()
    onMouseLeaveSpy = jest.fn()

    beforeEach(() => {
      wrapper = render(
        <Toast
          appearance="info"
          autoDismiss={false}
          autoDismissTimeout={300}
          label={LABEL}
          isRunning={false}
          onDismiss={onDismissSpy}
          onMouseEnter={onMouseEnterSpy}
          onMouseLeave={onMouseLeaveSpy}
          placement="top-right"
          transitionDuration={300}
          transitionState="entered"
        >
          {DESCRIPTION}
        </Toast>
      )
    })

    it('should set the `role` attribute to `alert`', () => {
      expect(wrapper.getByTestId('toast-wrapper')).toHaveAttribute(
        'role',
        'alert'
      )
    })

    it('should set the `aria-labelledby` attribute to the ID of the title', () => {
      const titleId = wrapper.getByTestId('toast-title').getAttribute('id')

      expect(wrapper.getByTestId('toast-wrapper')).toHaveAttribute(
        'aria-labelledby',
        titleId
      )
    })

    it('should set the `aria-describedby` attribute to the ID of the content', () => {
      const contentId = wrapper
        .getByTestId('toast-description')
        .getAttribute('id')

      expect(wrapper.getByTestId('toast-wrapper')).toHaveAttribute(
        'aria-describedby',
        contentId
      )
    })

    it('should set the `aria-hidden` attribute on the state icon', () => {
      expect(wrapper.getByTestId('toast-icon')).toHaveAttribute(
        'aria-hidden',
        'true'
      )
    })

    it('renders the toast to the DOM', () => {
      expect(wrapper.queryByTestId('toast-wrapper')).toBeInTheDocument()
    })

    it('displays the label text', () => {
      expect(wrapper.queryByText(LABEL)).toBeInTheDocument()
    })

    describe('and the user clicks on the dismiss button', () => {
      beforeEach(() => {
        fireEvent(
          wrapper.getByTestId('toast-dismiss'),
          new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
          })
        )
      })

      it('invokes the onDismiss callback', () => {
        expect(onDismissSpy).toHaveBeenCalledTimes(1)
      })
    })
  })
})
