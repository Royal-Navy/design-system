import React, { useState } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import 'jest-styled-components'
import { color } from '@royalnavy/design-tokens'

import { Toggle } from '.'
import { COMPONENT_SIZE } from '../Forms'
import { Field } from '../Field'

describe('Toggle', () => {
  it('renders an accessible switch that is off by default', () => {
    render(<Toggle label="Notifications" />)

    expect(
      screen.getByRole('switch', { name: 'Notifications' })
    ).not.toBeChecked()
  })

  it('supports an `aria-label` in place of a visible label', () => {
    render(<Toggle aria-label="Notifications" />)

    expect(
      screen.getByRole('switch', { name: 'Notifications' })
    ).toBeInTheDocument()
    expect(screen.queryByTestId('toggle-label')).not.toBeInTheDocument()
  })

  it.each(['toggle', 'toggle-input', 'toggle-label'])(
    'calls `onChange` once when `%s` is clicked',
    async (testId) => {
      const onChange = jest.fn()
      render(<Toggle label="Notifications" onChange={onChange} />)

      await userEvent.click(screen.getByTestId(testId))

      expect(onChange).toHaveBeenCalledTimes(1)
      expect(screen.getByRole('switch')).toBeChecked()
    }
  )

  it('can be operated with the keyboard', async () => {
    render(<Toggle label="Notifications" />)

    await userEvent.tab()
    expect(screen.getByRole('switch')).toHaveFocus()

    await userEvent.keyboard('[Space]')
    expect(screen.getByRole('switch')).toBeChecked()

    await userEvent.keyboard('[Space]')
    expect(screen.getByRole('switch')).not.toBeChecked()
  })

  it('can be switched off when `defaultChecked` is set', async () => {
    render(<Toggle label="Notifications" defaultChecked />)
    expect(screen.getByRole('switch')).toBeChecked()

    await userEvent.click(screen.getByRole('switch'))

    expect(screen.getByRole('switch')).not.toBeChecked()
  })

  it('does not change when controlled and `checked` is not updated', async () => {
    const onChange = jest.fn()
    render(<Toggle label="Notifications" checked={false} onChange={onChange} />)

    await userEvent.click(screen.getByRole('switch'))

    expect(onChange).toHaveBeenCalledTimes(1)
    expect(screen.getByRole('switch')).not.toBeChecked()
  })

  it('follows the `checked` prop when controlled', async () => {
    const Controlled = () => {
      const [isOn, setIsOn] = useState(false)

      return (
        <Toggle
          label="Notifications"
          checked={isOn}
          onChange={(e) => setIsOn(e.currentTarget.checked)}
        />
      )
    }
    render(<Controlled />)

    await userEvent.click(screen.getByRole('switch'))
    expect(screen.getByRole('switch')).toBeChecked()

    await userEvent.click(screen.getByRole('switch'))
    expect(screen.getByRole('switch')).not.toBeChecked()
  })

  it('cannot be changed when disabled', async () => {
    const onChange = jest.fn()
    render(<Toggle label="Notifications" isDisabled onChange={onChange} />)

    await userEvent.click(screen.getByRole('switch'))

    expect(screen.getByRole('switch')).toBeDisabled()
    expect(screen.getByRole('switch')).not.toBeChecked()
    expect(onChange).not.toHaveBeenCalled()
  })

  it('denotes an invalid state', () => {
    render(<Toggle label="Notifications" isInvalid />)

    expect(screen.getByRole('switch')).toBeInvalid()
    expect(screen.getByTestId('toggle-track')).toHaveStyle(
      `box-shadow: 0 0 0 2px ${color('danger', '800')}`
    )
  })

  it('receives validation attributes from `Field`', () => {
    render(
      <Field hintText="Hint" errors={[{ error: 'Required' }]}>
        <Toggle label="Notifications" />
      </Field>
    )

    expect(screen.getByRole('switch')).toBeInvalid()
    expect(screen.getByRole('switch')).toHaveAccessibleDescription('Hint')
  })

  it('contributes to native form values', async () => {
    render(
      <form data-testid="form">
        <Toggle label="Notifications" name="notifications" value="yes" />
      </form>
    )
    expect(screen.getByTestId('form')).toHaveFormValues({
      notifications: false,
    })

    await userEvent.click(screen.getByRole('switch'))

    expect(screen.getByTestId('form')).toHaveFormValues({ notifications: true })
  })

  it('forwards the ref, `id`, class name and arbitrary attributes', () => {
    const ref = React.createRef<HTMLInputElement>()
    render(
      <Toggle
        ref={ref}
        id="custom-id"
        className="custom-class"
        data-arbitrary="arbitrary"
        label="Notifications"
      />
    )

    expect(ref.current).toBe(screen.getByRole('switch'))
    expect(ref.current).toHaveAttribute('id', 'custom-id')
    expect(ref.current).toHaveAttribute('data-arbitrary', 'arbitrary')
    expect(screen.getByTestId('toggle')).toHaveClass('custom-class')
  })

  it('keeps a 24px minimum target size', () => {
    render(<Toggle aria-label="Notifications" size={COMPONENT_SIZE.SMALL} />)

    expect(screen.getByTestId('toggle')).toHaveStyleRule('min-width', '24px')
    expect(screen.getByTestId('toggle')).toHaveStyleRule('min-height', '24px')
  })

  it('renders a smaller track when `size` is small', () => {
    render(<Toggle label="Notifications" size={COMPONENT_SIZE.SMALL} />)

    expect(screen.getByTestId('toggle-track')).toHaveStyleRule('width', '36px')
  })
})
