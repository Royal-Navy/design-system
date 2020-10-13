import React, { useState } from 'react'
import classNames from 'classnames'
import { isFinite, isNil } from 'lodash'
import { selectors } from '@royalnavy/design-tokens'
import styled, { css } from 'styled-components'

import { NumberInputUnit } from './NumberInputUnit'
import { UnitPosition } from './NumberInput'
import { useInputText } from './useInputText'

const { color, fontSize, spacing } = selectors

interface InputProps {
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
  isCondensed: boolean
  offset: number
}

interface StyledInputWrapperProps {
  hasFocus: boolean
}

interface StyledLabelProps {
  hasContent: boolean
  hasFocus: boolean
}

const StyledInputWrapper = styled.div<StyledInputWrapperProps>`
  position: relative;
  flex-grow: 1;

  ${({ hasFocus }) =>
    hasFocus &&
    css`
      border-radius: 4px;
      box-shadow: 2px 2px 0 0 ${color('action', '600')},
        -2px -2px 0 0 ${color('action', '600')},
        2px -2px 0 0 ${color('action', '600')},
        -2px 2px 0 0 ${color('action', '600')};
    `}
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

  ${({ hasContent, hasFocus }) =>
    (hasContent || hasFocus) &&
    css`
      transform: translate(${spacing('6')}, 6px) scale(0.8);
    `}
`

const StyledInput = styled.input<StyledInputProps>`
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin: 0 0 0 ${({ offset }) => `${offset}px`};
  padding: ${({ isCondensed }) => (isCondensed ? spacing('3') : spacing('6'))};
  border: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  font-size: ${fontSize('base')};

  &:focus {
    outline: 0;
  }

  ${StyledLabel} + & {
    padding: ${spacing('10')} ${spacing('6')} ${spacing('2')};
  }
`

export const Input: React.FC<InputProps> = ({
  isDisabled = false,
  id,
  isCondensed,
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
  const hasLabel = label && label.length
  const [hasFocus, setHasFocus] = useState<boolean>(false)
  const { inputOffset, inputRef, unitOffset } = useInputText(
    value,
    unitPosition
  )

  const inputClasses = classNames('rn-numberinput__input', {
    'rn-numberinput__input--condensed': isCondensed,
  })

  return (
    <StyledInputWrapper hasFocus={hasFocus}>
      {hasLabel && (
        <StyledLabel
          className="rn-numberinput__label"
          data-testid="number-input-label"
          hasFocus={hasFocus}
          hasContent={!isNil(value)}
          htmlFor={id}
        >
          {label}
        </StyledLabel>
      )}

      <NumberInputUnit unit={unit} offset={unitOffset} />

      <StyledInput
        className={inputClasses}
        data-testid="number-input-input"
        disabled={isDisabled}
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
