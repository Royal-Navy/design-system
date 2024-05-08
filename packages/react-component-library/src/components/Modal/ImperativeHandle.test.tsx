/**
 * @jest-environment @happy-dom/jest-environment
 *
 * jsdom does not support the Dialog element, so
 * we need to use the happy-dom environment.
 */
import React, { useRef } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Modal, ModalImperativeHandle } from '.'

describe('Modal Imperative Handle', () => {
  const ModalWrapper = () => {
    const modalRef = useRef<ModalImperativeHandle>(null)

    return (
      <>
        <button
          onClick={() => modalRef.current?.open()}
          data-testid="open-button"
        >
          Open Modal
        </button>
        <button
          onClick={() => modalRef.current?.close()}
          data-testid="close-button"
        >
          Close Modal
        </button>
        <Modal ref={modalRef} title="Test Modal">
          <p>Modal content</p>
        </Modal>
      </>
    )
  }

  it('should open and close the modal using imperative handle', async () => {
    render(<ModalWrapper />)

    const modalRef = screen.getByRole('dialog', {
      hidden: true,
    }) as HTMLDialogElement

    const openButton = screen.getByTestId('open-button')
    const closeButton = screen.getByTestId('close-button')

    const user = userEvent.setup()

    // Initially, modal should be hidden
    expect(screen.queryByTestId('modal-main')).not.toBeVisible()
    expect(modalRef.open).toBe(false)

    // Open the modal using the open method
    await user.click(openButton)
    expect(screen.getByTestId('modal-main')).toBeVisible()
    expect(modalRef.open).toBe(true)

    // Close the modal using the close method
    await user.click(closeButton)
    expect(screen.queryByTestId('modal-main')).not.toBeVisible()
    expect(modalRef.open).toBe(false)
  })
})
