import React from 'react'

import { render, screen } from '@testing-library/react'

import { TOAST_APPEARANCE, Toast, showToast } from '.'

const LABEL = 'Example label'
const DESCRIPTION = 'This is an example toast message'

describe('Toast', () => {
  beforeEach(() => {
    render(
      <Toast
        appearance={TOAST_APPEARANCE.INFO}
        label={LABEL}
        data-arbitrary="foo"
      />
    )
  })

  describe('default props', () => {
    showToast(DESCRIPTION)

    it('should spread arbitrary props', async () => {
      expect(screen.getByTestId('wrapper')).toHaveAttribute(
        'data-arbitrary',
        'foo'
      )
    })

    it('should set the `role` attribute to `alert`', () => {
      expect(screen.getByTestId('wrapper')).toHaveAttribute('role', 'status')
    })

    it('should set the `aria-labelledby` attribute to the ID of the title', () => {
      const titleId = screen
        ?.getByText(LABEL)
        ?.parentElement?.getAttribute('id')

      expect(screen.getByTestId('wrapper')).toHaveAttribute(
        'aria-labelledby',
        titleId
      )
    })

    it('should set the `aria-describedby` attribute to the ID of the content', () => {
      const contentId = screen.getByText(DESCRIPTION).getAttribute('id')

      expect(screen.getByTestId('wrapper')).toHaveAttribute(
        'aria-describedby',
        contentId
      )
    })

    it('should set the `aria-hidden` attribute on the state icon', () => {
      expect(screen.getByTestId('icon')).toHaveAttribute('aria-hidden', 'true')
    })

    it('renders the toast to the DOM', () => {
      expect(screen.queryByTestId('wrapper')).toBeInTheDocument()
    })

    it('displays the label text', () => {
      expect(screen.queryByText(LABEL)).toBeInTheDocument()
    })
  })
})
