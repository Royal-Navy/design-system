import React from 'react'
import classNames from 'classnames'
import { isFinite } from 'lodash'

import { NumberInputUnit } from './NumberInputUnit'
import { UnitPosition } from './NumberInput'
import { useInputText } from './useInputText'

interface InputProps {
  isDisabled?: boolean
  id?: string
  isCondensed: boolean
  label?: string
  name: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onInputBlur: (event: React.FormEvent<HTMLInputElement>) => void
  onInputFocus: () => void
  placeholder?: string
  unit: string
  unitPosition: UnitPosition
  value?: number
}

export const Input: React.FC<InputProps> = ({
  isDisabled = false,
  id,
  isCondensed,
  label,
  name,
  onChange,
  onInputBlur,
  onInputFocus,
  placeholder = '',
  unit,
  unitPosition,
  value,
  ...rest
}) => {
  const hasLabel = label && label.length
  const { inputOffset, inputRef, unitOffset } = useInputText(
    value,
    unitPosition
  )

  const inputClasses = classNames('rn-numberinput__input', {
    'rn-numberinput__input--condensed': isCondensed,
  })

  return (
    <div
      className="rn-numberinput__input-wrapper"
      data-testid="number-input-wrapper"
    >
      {hasLabel && (
        <label
          className="rn-numberinput__label"
          data-testid="number-input-label"
          htmlFor={id}
        >
          {label}
        </label>
      )}

      <NumberInputUnit unit={unit} offset={unitOffset} />

      <input
        className={inputClasses}
        data-testid="number-input-input"
        disabled={isDisabled}
        id={id}
        name={name}
        onBlur={onInputBlur}
        onChange={onChange}
        onFocus={onInputFocus}
        placeholder={placeholder}
        ref={inputRef}
        type="text"
        value={isFinite(value) ? value : ''}
        {...rest}
        style={{ marginLeft: `${inputOffset}px` }}
      />
    </div>
  )
}

Input.displayName = 'Input'
