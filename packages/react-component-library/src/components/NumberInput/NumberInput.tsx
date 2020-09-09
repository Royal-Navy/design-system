import React, { FormEvent } from 'react'
import classNames from 'classnames'
import { isFinite, isNil, without } from 'lodash'
import { v4 as uuidv4 } from 'uuid'

import { EndAdornment } from './EndAdornment'
import { Footnote } from './Footnote'
import { getId } from '../../helpers'
import { Input } from './Input'
import { StartAdornment } from './StartAdornment'
import { useFocus } from './useFocus'
import { useValue } from './useValue'
import { UNIT_POSITION } from './constants'

type UnitPosition = typeof UNIT_POSITION.AFTER | typeof UNIT_POSITION.BEFORE

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
  unit?: string
  unitPosition?: UnitPosition
  value?: number
}

function formatValue(
  displayValue: number,
  unit: string,
  unitPosition: UnitPosition
) {
  if (isNil(displayValue)) {
    return null
  }

  if (unit) {
    return unitPosition === UNIT_POSITION.AFTER
      ? `${displayValue} ${unit}`
      : `${unit} ${displayValue}`
  }

  return displayValue
}

function getNewValue(event: React.FormEvent<HTMLInputElement>, unit: string) {
  const { value } = event.currentTarget
  const valueParts = value.split(' ')
  const valueWithoutUnit = without(valueParts, unit).join()

  return parseInt(valueWithoutUnit, 10)
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
  unit,
  unitPosition = UNIT_POSITION.AFTER,
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
    const newValue = getNewValue(event, unit)

    setCommittedValueIfWithinRange(max, min, name, onChange)(event, newValue)
    onInputBlur(event)
  }

  function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = getNewValue(event, unit)
    if (isFinite(newValue)) {
      setNextValue(newValue)
      onChange({
        target: {
          name,
          value: newValue,
        },
      })
    }
  }

  const numberInputId = getId('number-input')

  return (
    <div
      aria-label={label || 'Number input'}
      className={classes}
      data-testid="number-input-container"
      id={numberInputId}
      role="spinbutton"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={displayValue}
      aria-valuetext={String(formatValue(displayValue, unit, unitPosition))}
    >
      <div className="rn-numberinput__outer-wrapper">
        <StartAdornment>{startAdornment}</StartAdornment>

        <Input
          aria-labelledby={numberInputId}
          id={id}
          isDisabled={isDisabled}
          isCondensed={isCondensed}
          label={label}
          name={name}
          onChange={onInputChange}
          onInputBlur={onInputBlurSetCommittedValue}
          onInputFocus={onInputFocus}
          placeholder={placeholder}
          value={formatValue(displayValue, unit, unitPosition)}
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
