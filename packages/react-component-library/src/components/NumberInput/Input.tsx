import React, { useState } from 'react'
import classNames from 'classnames'
import { isFinite, isNil } from 'lodash'
import { ColourGroup, selectors } from '@royalnavy/design-tokens'
import styled, { css } from 'styled-components'

import { NumberInputUnit } from './NumberInputUnit'
import { UnitPosition } from './NumberInput'
import { useInputText } from './useInputText'
import { InputValidationProps } from '../../common/InputValidationProps'

const { color, fontSize, spacing } = selectors

interface InputProps extends InputValidationProps {
  isDisabled?: boolean
  id?: string
  isCondensed: boolean
  label?: string
  name: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onInputBlur: (event: React.FormEvent<HTMLInputElement>) => void
  placeholder?: string
  unit: string
  unitPosition: UnitPosition
  value?: number
}

interface StyledInputProps {
  hasLabel: boolean
  isCondensed: boolean
  offset: number
}

interface StyledInputWrapperProps extends InputValidationProps {
  hasFocus: boolean
}

interface StyledLabelProps {
  hasContent: boolean
  hasFocus: boolean
  hasUnit: boolean
}

function getInputBorder(group: ColourGroup) {
  return css`
    border-radius: 4px;
    box-shadow: 2px 2px 0 0 ${color(group, '600')},
      -2px -2px 0 0 ${color(group, '600')}, 2px -2px 0 0 ${color(group, '600')},
      -2px 2px 0 0 ${color(group, '600')};
  `
}

const StyledInputWrapper = styled.div<StyledInputWrapperProps>`
  position: relative;
  flex-grow: 1;

  ${({ hasFocus }) => hasFocus && getInputBorder('action')}
  ${({ isInvalid }) => isInvalid && getInputBorder('danger')}
  ${({ isValid }) => isValid && getInputBorder('success')}
`

const StyledLabel = styled.label<StyledLabelProps>`
  display: block;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: top left;
  transform: translate(${spacing('6')}, ${spacing('6')}) scale(1);
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  pointer-events: none;
  color: ${color('neutral', '400')};
  font-size: ${fontSize('base')};

  ${({ hasContent, hasFocus, hasUnit }) =>
    (hasContent || hasFocus || hasUnit) &&
    css`
      transform: translate(${spacing('6')}, 6px) scale(0.8);
    `}
`

const StyledInput = styled.input<StyledInputProps>`
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin: 0 0 0 ${({ offset }) => `${offset}px`};
  padding: ${({ hasLabel, isCondensed }) => {
    if (isCondensed) {
      return spacing('3')
    }

    if (hasLabel) {
      return `${spacing('10')} ${spacing('6')} ${spacing('2')}`
    }

    return spacing('6')
  }};
  border: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  font-size: ${fontSize('base')};

  &:focus {
    outline: 0;
  }
`

export const Input: React.FC<InputProps> = ({
  isDisabled = false,
  id,
  isCondensed,
  isInvalid,
  isValid,
  label,
  name,
  onChange,
  onInputBlur,
  placeholder = '',
  unit,
  unitPosition,
  value,
  ...rest
}) => {
  const hasLabel = !!(label && label.length)
  const [hasFocus, setHasFocus] = useState<boolean>(false)
  const { inputOffset, inputRef, unitOffset } = useInputText(
    value,
    unitPosition
  )

  const inputClasses = classNames('rn-numberinput__input', {
    'rn-numberinput__input--condensed': isCondensed,
  })

  return (
    <StyledInputWrapper
      hasFocus={hasFocus}
      isInvalid={isInvalid}
      isValid={isValid}
    >
      {hasLabel && (
        <StyledLabel
          className="rn-numberinput__label"
          data-testid="number-input-label"
          hasFocus={hasFocus}
          hasContent={!isNil(value)}
          hasUnit={!isNil(unit)}
          htmlFor={id}
        >
          {label}
        </StyledLabel>
      )}

      <NumberInputUnit left={`${unitOffset}px`} top={hasLabel && spacing('4')}>
        {unit}
      </NumberInputUnit>

      <StyledInput
        className={inputClasses}
        data-testid="number-input-input"
        disabled={isDisabled}
        hasLabel={hasLabel}
        id={id}
        isCondensed={isCondensed}
        name={name}
        offset={inputOffset}
        onBlur={(e) => {
          setHasFocus(false)
          onInputBlur(e)
        }}
        onChange={onChange}
        onFocus={() => {
          setHasFocus(true)
        }}
        placeholder={placeholder}
        ref={inputRef}
        type="text"
        value={isFinite(value) ? value : ''}
        {...rest}
      />
    </StyledInputWrapper>
  )
}

Input.displayName = 'Input'
