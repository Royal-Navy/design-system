import React from 'react'

import { render, screen } from '@testing-library/react'

import { TOAST_APPEARANCE, Toast, showToast } from '.'

const LABEL = 'Example label'
const MESSAGE = 'This is an example toast message'

function setup() {
  render(
    <Toast
      appearance={TOAST_APPEARANCE.INFO}
      label={LABEL}
      data-arbitrary="foo"
    />
  )
}

it('renders the toast', async () => {
  setup()

  showToast(MESSAGE)

  const wrapper = await screen.findByRole('status')
  expect(wrapper).toHaveAttribute('data-arbitrary', 'foo')

  const titleId = screen?.getByText(LABEL)?.parentElement?.getAttribute('id')
  expect(wrapper).toHaveAttribute('aria-labelledby', titleId)

  const contentId = screen.getByText(MESSAGE).getAttribute('id')
  expect(wrapper).toHaveAttribute('aria-describedby', contentId)

  expect(screen.getByTestId('icon')).toHaveAttribute('aria-hidden', 'true')
  expect(screen.getByText(LABEL)).toBeInTheDocument()
})
