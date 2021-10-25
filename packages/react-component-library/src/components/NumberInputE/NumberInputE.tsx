import React from 'react'
import { isFinite, isNil } from 'lodash'
import { v4 as uuidv4 } from 'uuid'

import { EndAdornment } from './EndAdornment'
import { Footnote } from './Footnote'
import { getId, hasClass } from '../../helpers'
import { Input } from './Input'
import { InputValidationProps } from '../../common/InputValidationProps'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StartAdornment } from './StartAdornment'
import { useFocus } from '../../hooks/useFocus'
import { useValue } from './useValue'
import { UNIT_POSITION } from './constants'
import { StyledNumberInput } from './partials/StyledNumberInput'
import { StyledNumberInputOuterWrapper } from './partials/StyledNumberInputOuterWrapper'

export type UnitPosition =
  | typeof UNIT_POSITION.AFTER
  | typeof UNIT_POSITION.BEFORE

export interface NumberInputProps
  extends ComponentWithClass,
    InputValidationProps {
  /**
   * Toggles whether to focus the input on initial render.
   */
  autoFocus?: boolean
  /**
   * Optional text footnote to display below the component.
   */
  footnote?: string
  /**
   * Optional HTML `id` attribute to apply to the internal input.
   */
  id?: string
  /**
   * Toggles whether or not to render a reduced height version of the component.
   */
  isCondensed?: boolean
  /**
   * Toggles whether the component is disabled or not (preventing user interaction).
   */
  isDisabled?: boolean
  /**
   * Optional descriptive text label to display within the component.
   */
  label?: string
  /**
   * Maximum value selectable by the component (upper bound).
   */
  max?: number
  /**
   * Minimum value selectable by the component (lower bound).
   */
  min?: number
  /**
   * HTML `name` attribute to apply to the internal input.
   */
  name: string
  /**
   * Optional handler called when the `onBlur` event is emitted.
   */
  onBlur?: (event: React.FormEvent) => void
  /**
   * Handler called when the value selected by the component changes.
   */
  onChange: (event: any) => void
  /**
   * Optional placeholder text to display within the component.
   */
  placeholder?: string
  /**
   * Optional adornment (icon or string) to display to the left of the input value.
   */
  startAdornment?: React.ReactNode | string
  /**
   * Stepped increment amount by which to increase/decrese component value.
   */
  step?: number
  /**
   * Optional value to display next to the component value.
   */
  unit?: string
  /**
   * Whether to display the unit to the left or right of the component value.
   */
  unitPosition?: UnitPosition
  /**
   * Currently selected value displayed by the component.
   */
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

export const NumberInputE: React.FC<NumberInputProps> = ({
  className,
  footnote,
  id = uuidv4(),
  isCondensed,
  isDisabled = false,
  isInvalid,
  isValid,
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
  const { committedValue, setCommittedValue } = useValue(value)
  const { hasFocus, onLocalFocus, onLocalBlur } = useFocus(onBlur)

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
    <StyledNumberInput
      aria-label={label || 'Number input'}
      className={className}
      data-testid="number-input-container"
      id={numberInputId}
      role="spinbutton"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={committedValue}
      aria-valuetext={String(formatValue(committedValue, unit, unitPosition))}
    >
      <StyledNumberInputOuterWrapper
        $hasFocus={hasFocus}
        $isInvalid={isInvalid || hasClass(className, 'is-invalid')}
        $isValid={isValid || hasClass(className, 'is-valid')}
      >
        <StartAdornment>{startAdornment}</StartAdornment>

        <Input
          aria-labelledby={numberInputId}
          hasFocus={hasFocus}
          id={id}
          isDisabled={isDisabled}
          isCondensed={isCondensed}
          isValid={isValid || hasClass(className, 'is-valid')}
          isInvalid={isInvalid || hasClass(className, 'is-invalid')}
          label={label}
          name={name}
          onChange={(event) => {
            const newValue = getNewValue(event)
            setCommittedValueWithinRange(newValue)
          }}
          onBlur={(event) => {
            const newValue = getNewValue(event)
            setCommittedValueWithinRange(newValue)

            onLocalBlur(event)
          }}
          onFocus={onLocalFocus}
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
      </StyledNumberInputOuterWrapper>

      <Footnote>{footnote}</Footnote>
    </StyledNumberInput>
  )
}

NumberInputE.displayName = 'NumberInputE'
