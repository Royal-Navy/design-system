import React from 'react'
import { render, screen } from '@testing-library/react'
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
})
