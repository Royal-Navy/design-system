import React from 'react'
import { color } from '@royalnavy/design-tokens'
import { render, screen, within, waitFor } from '@testing-library/react'

import { TOAST_APPEARANCE, Toast, dismissToast, showToast } from '.'

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
async function getLastToast(label?: string) {
  try {
    const toasts = await screen.findAllByRole('status', {
      name: label ? new RegExp(label, 'i') : undefined,
    })

    return toasts[0]
  } catch (error) {
    if (error instanceof Error && error.message.includes('Unable to find')) {
      return null
    }

    throw error
  }
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

  expect(within(lastToast!).getByTestId('icon')).toHaveAttribute(
    'aria-hidden',
    'true'
  )
  expect(within(lastToast!).getByTestId('icon')).toHaveStyle({
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

  expect(within(lastToast!).getByText(expectedNewLabel)).toBeInTheDocument()
  expect(within(lastToast!).getByText(expectedNewMessage)).toBeInTheDocument()
  expect(within(lastToast!).getByTestId('icon')).toHaveStyle({
    color: color('danger', '500'),
  })
})

it('sets the message when the message is JSX', async () => {
  setup()

  const expectedNewLabel = 'JSX'
  const expectedNewMessage = (
    <>
      <p>one</p>
      <p>two</p>
    </>
  )

  showToast({
    label: expectedNewLabel,
    message: expectedNewMessage,
  })

  const lastToast = await getLastToast(expectedNewLabel)

  expect(within(lastToast!).getByText(expectedNewLabel)).toBeInTheDocument()
  expect(within(lastToast!).getAllByRole('paragraph')).toHaveLength(2)
})

it('sets unique IDs when there are multiple toasts', async () => {
  setup()

  showToast(MESSAGE)
  showToast(MESSAGE)

  const [toast1, toast2] = await screen.findAllByRole('status')

  expect(toast1.getAttribute('aria-labelledby')).not.toEqual(
    toast2.getAttribute('aria-labelledby')
  )
  expect(toast1.getAttribute('aria-describedby')).not.toEqual(
    toast2.getAttribute('aria-describedby')
  )
})

it('sets an accessible name when there is no message', async () => {
  setup()

  const label = 'toast-with-no-message'
  showToast({ label, message: '' })

  const toast = await getLastToast(label)

  expect(toast).toHaveAccessibleName(new RegExp(label))
})

it('dismisses all toasts when `dismissToast` is called', async () => {
  setup()

  showToast(MESSAGE)
  showToast(MESSAGE)

  expect(screen.queryAllByRole('status').length).toBeGreaterThan(0)

  dismissToast()

  await waitFor(() => {
    expect(screen.queryAllByRole('status')).toHaveLength(0)
  })
})
