import React from 'react'
import classNames from 'classnames'
import { isFinite, isNil } from 'lodash'
import { v4 as uuidv4 } from 'uuid'

import { EndAdornment } from './EndAdornment'
import { Footnote } from './Footnote'
import { getId } from '../../helpers'
import { Input } from './Input'
import { StartAdornment } from './StartAdornment'
import { useFocus } from './useFocus'
import { useValue } from './useValue'
import { UNIT_POSITION } from './constants'

export type UnitPosition =
  | typeof UNIT_POSITION.AFTER
  | typeof UNIT_POSITION.BEFORE

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

function getNewValue(event: React.FormEvent<HTMLInputElement>): number {
  const { value } = event.currentTarget

  if (value === '') {
    return null
  }

  return parseInt(value, 10)
}

function isWithinRange(max: number, min: number, newValue: number) {
  const isNotBelowMin = isNil(min) || newValue >= min
  const isNotAboveMax = isNil(max) || newValue <= max

  return isNotBelowMin && isNotAboveMax
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
  value = 0,
  ...rest
}) => {
  const { hasFocus, onInputBlur, onInputFocus } = useFocus(onBlur)
  const { committedValue, setCommittedValue } = useValue(value)

  const classes = classNames('rn-numberinput', className, {
    'has-focus': hasFocus,
    'has-content': !isNil(committedValue),
  })

  function setCommittedValueWithinRange(newValue: number) {
    if (
      (isFinite(newValue) && isWithinRange(max, min, newValue)) ||
      newValue === null
    ) {
      setCommittedValue(newValue)
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
      aria-valuenow={committedValue}
      aria-valuetext={String(formatValue(committedValue, unit, unitPosition))}
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
          onChange={(event) => {
            const newValue = getNewValue(event)
            setCommittedValueWithinRange(newValue)
          }}
          onInputBlur={(event) => {
            const newValue = getNewValue(event)
            setCommittedValueWithinRange(newValue)
            onInputBlur(event)
          }}
          onInputFocus={onInputFocus}
          placeholder={placeholder}
          unit={unit}
          unitPosition={unitPosition}
          value={committedValue}
          {...rest}
        />

        <EndAdornment
          isCondensed={isCondensed}
          isDisabled={isDisabled}
          max={max}
          min={min}
          name={name}
          onClick={(e, newValue) => {
            setCommittedValueWithinRange(newValue)
          }}
          step={step}
          value={committedValue}
        />
      </div>

      <Footnote>{footnote}</Footnote>
    </div>
  )
}

NumberInput.displayName = 'NumberInput'
