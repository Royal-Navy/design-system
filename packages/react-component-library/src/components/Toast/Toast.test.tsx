import React from 'react'
import { color } from '@royalnavy/design-tokens'
import { render, screen, waitFor, within } from '@testing-library/react'

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

/* Added this function to resolve an issue when running tests for
 * the whole of this file and more than one toast is shown */
async function getLastToast(lastToastLabel: string) {
  await waitFor(() => {
    expect(screen.getByText(lastToastLabel)).toBeInTheDocument()
  })

  return screen.getAllByRole('status')[0]
}

it('renders the toast', async () => {
  setup()

  showToast(MESSAGE)

  const lastToast = await getLastToast(LABEL)
  expect(lastToast).toHaveAttribute('data-arbitrary', 'foo')

  const titleId = screen?.getByText(LABEL)?.parentElement?.getAttribute('id')
  expect(lastToast).toHaveAttribute('aria-labelledby', titleId)

  const contentId = screen.getByText(MESSAGE).getAttribute('id')
  expect(lastToast).toHaveAttribute('aria-describedby', contentId)

  expect(within(lastToast).getByTestId('icon')).toHaveAttribute(
    'aria-hidden',
    'true'
  )
  expect(within(lastToast).getByTestId('icon')).toHaveStyle({
    color: color('action', '500'),
  })

  expect(screen.getByText(LABEL)).toBeInTheDocument()
})

it('sets new props when `showToast` is called with new props', async () => {
  setup()

  const expectedNewLabel = 'New label'
  const expectedNewMessage = 'New message'

  showToast({
    appearance: TOAST_APPEARANCE.ERROR,
    label: expectedNewLabel,
    message: expectedNewMessage,
  })

  const lastToast = await getLastToast(expectedNewLabel)

  expect(within(lastToast).getByText(expectedNewLabel)).toBeInTheDocument()
  expect(within(lastToast).getByText(expectedNewMessage)).toBeInTheDocument()
  expect(within(lastToast).getByTestId('icon')).toHaveStyle({
    color: color('danger', '500'),
  })
})
