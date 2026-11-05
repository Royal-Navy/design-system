import React from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Sheet } from './Sheet'
import { SheetButton } from './SheetButton'

describe('Sheet', () => {
  it('keeps the button element and its focus when opened', async () => {
    const user = userEvent.setup()

    render(
      <Sheet
        button={<SheetButton aria-label="Open sheet" icon={<span />} />}
        closeDelay={0}
      >
        <div>Sheet content</div>
      </Sheet>
    )
    const button = screen.getByRole('button', { name: 'Open sheet' })

    await user.click(button)

    expect(screen.getByText('Sheet content')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Open sheet' })).toBe(button)
    expect(button).toHaveFocus()
  })

  describe('when a close is pending', () => {
    beforeEach(() => {
      jest.useFakeTimers()
    })

    afterEach(() => {
      jest.useRealTimers()
    })

    it('hides when the first close is due', () => {
      const step = () =>
        act(() => {
          jest.advanceTimersByTime(1)
        })

      render(
        <Sheet button={<SheetButton aria-label="Open sheet" icon={<span />} />}>
          <div>Sheet content</div>
        </Sheet>
      )

      fireEvent.click(screen.getByRole('button', { name: 'Open sheet' }))
      fireEvent.mouseDown(document)
      for (let elapsed = 0; elapsed < 240; elapsed += 1) {
        step()
      }
      fireEvent.mouseDown(document)

      let elapsed = 240
      while (screen.queryByText('Sheet content') && elapsed < 1000) {
        step()
        elapsed += 1
      }

      expect(elapsed).toBe(251)
    })
  })
})
