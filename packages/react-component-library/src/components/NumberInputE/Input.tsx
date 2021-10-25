import React from 'react'
import { isFinite, isNil } from 'lodash'
import { selectors } from '@defencedigital/design-tokens'

import { NumberInputUnit } from './NumberInputUnit'
import { UnitPosition } from './NumberInputE'
import { useInputText } from './useInputText'
import { InputValidationProps } from '../../common/InputValidationProps'
import { StyledInput } from './partials/StyledInput'
import { StyledLabel } from './partials/StyledLabel'
import { StyledInputWrapper } from './partials/StyledInputWrapper'

export interface InputProps extends InputValidationProps {
  hasFocus: boolean
  isDisabled?: boolean
  id?: string
  isCondensed: boolean
  label?: string
  name: string
  onBlur: (event: React.FormEvent<HTMLInputElement>) => void
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFocus: (event: React.FormEvent<HTMLInputElement>) => void
  placeholder?: string
  unit: string
  unitPosition: UnitPosition
  value?: number
}

const { spacing } = selectors

export const Input: React.FC<InputProps> = ({
  hasFocus,
  isDisabled = false,
  id,
  isCondensed,
  label,
  placeholder = '',
  unit,
  unitPosition,
  value,
  ...rest
}) => {
  const hasLabel = !!(label && label.length)
  const { canShow, inputOffset, inputRef, unitOffset } = useInputText(
    value,
    unitPosition
  )

  return (
    <StyledInputWrapper>
      {hasLabel && (
        <StyledLabel
          $hasContent={!isNil(value)}
          $hasFocus={hasFocus}
          $hasUnit={!isNil(unit)}
          data-testid="number-input-label"
          htmlFor={id}
        >
          {label}
        </StyledLabel>
      )}

      {canShow && (
        <NumberInputUnit
          left={`${unitOffset}px`}
          top={hasLabel && spacing('4')}
        >
          {unit}
        </NumberInputUnit>
      )}

      <StyledInput
        $hasLabel={hasLabel}
        $isCondensed={isCondensed}
        $offset={inputOffset}
        data-testid="number-input-input"
        disabled={isDisabled}
        id={id}
        placeholder={placeholder}
        ref={inputRef}
        type="text"
        value={isFinite(value) && canShow ? value : ''}
        {...rest}
      />
    </StyledInputWrapper>
  )
}

Input.displayName = 'Input'
