import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Toggle } from './Toggle'

describe('Toggle', () => {
  let onToggleMock: jest.Mock

  beforeEach(() => {
    onToggleMock = jest.fn()
  })

  it('should toggle correctly when clicked', () => {
    render(<Toggle defaultChecked={false} onChange={onToggleMock} />)
    fireEvent.click(screen.getByTestId('toggle-input'))
    expect(onToggleMock).toHaveBeenCalled()
  })

  it('should not toggle when disabled', () => {
    render(<Toggle defaultChecked={false} onChange={onToggleMock} isDisabled />)
    fireEvent.click(screen.getByRole('button'))
    expect(onToggleMock).not.toHaveBeenCalled()
  })

  it('should display the correct aria-pressed attribute', () => {
    const { rerender } = render(
      <Toggle defaultChecked={false} onChange={() => {}} />
    )
    expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'false')

    rerender(<Toggle defaultChecked onChange={() => {}} />)
    expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'true')
  })

  it('should toggle when Enter key is pressed', () => {
    render(<Toggle defaultChecked={false} onChange={onToggleMock} />)
    fireEvent.keyDown(screen.getByRole('button'), {
      key: 'Enter',
      code: 'Enter',
      keyCode: 13,
    })
    fireEvent.keyUp(screen.getByRole('button'), {
      key: 'Enter',
      code: 'Enter',
      keyCode: 13,
    })
    expect(onToggleMock).toHaveBeenCalled()
  })

  it('should toggle when Space key is pressed', () => {
    render(<Toggle defaultChecked={false} onChange={onToggleMock} />)
    fireEvent.keyDown(screen.getByRole('button'), {
      key: ' ',
      code: 'Space',
      keyCode: 32,
    })
    fireEvent.keyUp(screen.getByRole('button'), {
      key: ' ',
      code: 'Space',
      keyCode: 32,
    })
    expect(onToggleMock).toHaveBeenCalled()
  })

  it('should not toggle when other keys are pressed', () => {
    render(<Toggle defaultChecked={false} onChange={onToggleMock} />)
    fireEvent.keyDown(screen.getByRole('button'), {
      key: 'a',
      code: 'KeyA',
      keyCode: 65,
    })
    expect(onToggleMock).not.toHaveBeenCalled()
  })
})
