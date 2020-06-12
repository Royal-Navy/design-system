import React, { FormEvent } from 'react'
import classNames from 'classnames'
import isFinite from 'lodash/isFinite'
import isNil from 'lodash/isNil'
import { v4 as uuidv4 } from 'uuid'

import { EndAdornment } from './EndAdornment'
import { Input } from './Input'
import { StartAdornment } from './StartAdornment'
import { useFocus } from './useFocus'
import { useValue } from './useValue'
import { Footnote } from './Footnote'

export interface NumberInputProps {
  autoFocus?: boolean
  className?: string
  footnote?: string
  id?: string
  isCondensed?: boolean
  isDisabled?: boolean
  label?: string
  max?: number
  min?: number
  name: string
  onBlur?: (event: React.FormEvent) => void
  onChange: (event: any) => void
  placeholder?: string
  startAdornment?: React.ReactNode | string
  step?: number
  value?: number
}

export const NumberInput: React.FC<NumberInputProps> = ({
  className,
  footnote,
  id = uuidv4(),
  isCondensed,
  isDisabled = false,
  label,
  max,
  min,
  name,
  onBlur,
  onChange,
  placeholder = '',
  startAdornment,
  step = 1,
  value,
  ...rest
}) => {
  const { hasFocus, onInputBlur, onInputFocus } = useFocus(onBlur)
  const {
    displayValue,
    setCommittedValueIfWithinRange,
    setNextValue,
  } = useValue(value)

  const classes = classNames('rn-numberinput', className, {
    'has-focus': hasFocus,
    'has-content': !isNil(displayValue),
  })

  function onInputBlurSetCommittedValue(event: FormEvent<HTMLInputElement>) {
    setNextValue(null)
    const newValue = parseInt(event.currentTarget.value, 10)

    setCommittedValueIfWithinRange(max, min, name, onChange)(event, newValue)
    onInputBlur(event)
  }

  function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = parseInt(event.currentTarget.value, 10)
    if (isFinite(newValue)) {
      setNextValue(newValue)
    }
  }

  return (
    <div className={classes} data-testid="number-input-container">
      <div className="rn-numberinput__outer-wrapper">
        <StartAdornment>{startAdornment}</StartAdornment>

        <Input
          id={id}
          isDisabled={isDisabled}
          isCondensed={isCondensed}
          label={label}
          name={name}
          onChange={onInputChange}
          onInputBlur={onInputBlurSetCommittedValue}
          onInputFocus={onInputFocus}
          placeholder={placeholder}
          value={displayValue}
          {...rest}
        />

        <EndAdornment
          isCondensed={isCondensed}
          isDisabled={isDisabled}
          max={max}
          min={min}
          name={name}
          onClick={setCommittedValueIfWithinRange(max, min, name, onChange)}
          step={step}
          value={displayValue}
        />
      </div>

      <Footnote>{footnote}</Footnote>
    </div>
  )
}

NumberInput.displayName = 'NumberInput'
