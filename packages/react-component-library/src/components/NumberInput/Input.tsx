import React, { KeyboardEventHandler, useCallback } from 'react'
import { isNil } from 'lodash'
import { Decimal } from 'decimal.js'

import { ComponentSizeType } from '../Forms'
import { StyledInput } from '../TextInput/partials/StyledInput'
import { StyledInputWrapper } from './partials/StyledInputWrapper'
import { StyledLabel } from '../TextInput/partials/StyledLabel'

export interface InputProps {
  hasFocus: boolean
  isDisabled?: boolean
  id?: string
  label?: string
  name: string
  onBeforeInput: (event: React.FormEvent<HTMLInputElement>) => void
  onBlur: (event: React.FormEvent<HTMLInputElement>) => void
  onChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => void
  onFocus: (event: React.FormEvent<HTMLInputElement>) => void
  onPaste: (event: React.ClipboardEvent<HTMLInputElement>) => void
  placeholder?: string
  size: ComponentSizeType
  step: number
  value?: string | null
}

export const Input: React.FC<InputProps> = ({
  hasFocus,
  isDisabled,
  id,
  label,
  size,
  step,
  value,
  onChange,
  ...rest
}) => {
  const hasLabel = !!(label && label.length)

  const KEY_ARROW_UP = 'ArrowUp'
  const KEY_ARROW_DOWN = 'ArrowDown'

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      const {
        code,
        currentTarget: { value: eventValue },
      } = event

      if (![KEY_ARROW_UP, KEY_ARROW_DOWN].includes(code)) {
        return
      }

      event.preventDefault()

      // Do nothing if the value is e.g. only `-`
      if (value && !Number.isFinite(parseFloat(value))) {
        return
      }

      const decimal = new Decimal(eventValue || 0)

      const newEvent = {
        ...event,
        currentTarget: {
          ...event.currentTarget,
          value: String(
            code === KEY_ARROW_UP ? decimal.plus(step) : decimal.minus(step)
          ),
        },
      }

      onChange(newEvent)
    },
    [step, value, onChange]
  )

  return (
    <StyledInputWrapper>
      {hasLabel && (
        <StyledLabel
          $hasContent={!isNil(value)}
          $hasFocus={hasFocus}
          $size={size}
          htmlFor={id}
          data-testid="number-input-label"
        >
          {label}
        </StyledLabel>
      )}
      <StyledInput
        $hasLabel={hasLabel}
        $size={size}
        data-testid="number-input-input"
        disabled={isDisabled}
        id={id}
        value={value || ''}
        onKeyDown={handleKeyDown}
        onChange={onChange}
        {...rest}
      />
    </StyledInputWrapper>
  )
}

Input.displayName = 'Input'
