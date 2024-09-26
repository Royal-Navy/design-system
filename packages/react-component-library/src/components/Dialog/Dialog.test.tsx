import React from 'react'

import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderToStaticMarkup } from 'react-dom/server'

import { Dialog } from '.'

function setup({
  ariaLabel,
  onConfirmMock,
  title,
}: {
  ariaLabel?: string
  onConfirmMock?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>
  title?: string
}) {
  const description = <span>Dialog description.</span>
  const onConfirmSpy = jest.fn()
  const onCancelSpy = jest.fn()
  const user = userEvent.setup()

  const { rerender } = render(
    <Dialog
      aria-label={ariaLabel}
      data-arbitrary="arbitrary"
      title={title}
      description={description}
      onConfirm={onConfirmMock ?? onConfirmSpy}
      onCancel={onCancelSpy}
      isOpen
    />
  )

  return {
    description,
    onConfirmSpy,
    onCancelSpy,
    rerender,
    user,
  }
}

it('renders the dialog', () => {
  const expectedTitle = 'Dialog title'
  const { description } = setup({ title: expectedTitle })

  expect(screen.getByRole('dialog')).toHaveAttribute(
    'data-arbitrary',
    'arbitrary'
  )

  const titleId = screen.getByTestId('dialog-title').getAttribute('id')
  expect(screen.getByRole('dialog')).toHaveAttribute('aria-labelledby', titleId)

  expect(screen.getByTestId('dialog-title')).toHaveTextContent(expectedTitle)

  expect(screen.getByTestId('dialog-description').innerHTML).toContain(
    renderToStaticMarkup(description)
  )
})

it('invokes the `onConfirm` callback when the `Confirm` button is clicked', async () => {
  const { onConfirmSpy, user } = setup({ title: 'Dialog title' })

  await user.click(screen.getByRole('button', { name: 'Confirm' }))

  expect(onConfirmSpy).toHaveBeenCalledTimes(1)
})

it('invokes the `onCancel` callback when the `Cancel` button is clicked', async () => {
  const { onCancelSpy, user } = setup({ title: 'Dialog title' })

  await user.click(screen.getByRole('button', { name: 'Cancel' }))

  expect(onCancelSpy).toHaveBeenCalledTimes(1)
})

it('sets attributes correctly when aria-label but no title is set', () => {
  const expectedAriaLabel = 'Accessible name'
  setup({ ariaLabel: expectedAriaLabel })

  expect(screen.getByRole('dialog')).not.toHaveAttribute('aria-labelledby')
  expect(screen.getByRole('dialog')).toHaveAttribute(
    'aria-label',
    expectedAriaLabel
  )
})

it('does not generate new IDs when the description changes', () => {
  const { rerender } = setup({ title: 'Dialog title' })

  const initialTitleId = screen.getByTestId('dialog-title').id
  const initialDescriptionId = screen.getByTestId('modal-body').id

  rerender(
    <Dialog description={<span>New description.</span>} title="New title" />
  )

  expect(screen.getByTestId('dialog-title')).toHaveAttribute(
    'id',
    initialTitleId
  )
  expect(screen.getByTestId('modal-body')).toHaveAttribute(
    'id',
    initialDescriptionId
  )
})

it('disables the buttons when `onConfirm` is an async action and `Confirm` is clicked', async () => {
  let resolvePromise: () => void = () => {}

  const onConfirmMock: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => Promise<void> = jest.fn(
    () =>
      new Promise((resolve) => {
        resolvePromise = resolve
      })
  )

  const { user } = setup({ onConfirmMock, title: 'Dialog title' })

  await user.click(screen.getByRole('button', { name: 'Confirm' }))

  expect(await screen.findByTestId('loading-icon')).toBeInTheDocument()

  const buttons = screen.getAllByRole('button')
  expect(buttons[0]).toBeDisabled()
  expect(buttons[1]).toBeDisabled()

  resolvePromise()

  await waitFor(() => {
    expect(screen.queryByTestId('loading-icon')).not.toBeInTheDocument()
  })

  expect(buttons[0]).toBeEnabled()
  expect(buttons[1]).toBeEnabled()
})
