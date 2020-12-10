import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'
import { v4 as uuidv4 } from 'uuid'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { InputValidationProps } from '../../common/InputValidationProps'
import logger from '../../utils/logger'

export interface CheckboxProps
  extends ComponentWithClass,
    InputValidationProps {
  id?: string
  checked?: boolean
  defaultChecked?: boolean
  isChecked?: boolean
  isDisabled?: boolean
  label: string
  name: string
  onBlur?: (event: React.FormEvent<HTMLInputElement>) => void
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void
  value?: string
}

interface StyledCheckboxProps {
  $isDisabled?: boolean
  $isInvalid?: boolean
}

const CHECKBOX_ANIMATION_TIMING = '0.2s'
const CHECKBOX_FOCUS_WIDTH = '1px'

const { spacing, fontSize, color } = selectors

const StyledOuterWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
`

const StyledLabel = styled.label`
  color: ${color('neutral', '400')};
  padding: ${spacing('1')} 0;
`

const StyledCheckmark = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 18px;
  width: 18px;
  background-color: ${color('neutral', 'white')};
  border: 1px solid ${color('neutral', '200')};
  border-radius: 4px;

  &::after {
    content: '';
    position: absolute;
    display: none;

    content: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOC44MjIgMGMxLjA1LS4wMjcgMS41NzQgMS4zMDQuODI3IDIuMDhMNC4yOTggNy43NGEuODMuODMgMCAwIDEtMS4yMDcgMEwuMzc2IDQuODU1Qy0uNzUyIDMuNzE4LjkxNCAxLjk1NiAxLjk5IDMuMTQ5bDEuNTA4IDEuNTk1Yy4xMDUuMTEuMjg4LjExLjQwNyAwbDQuMTMtNC4zN0ExLjEgMS4xIDAgMCAxIDguODIzIDB6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    line-height: 1;
    font-size: 14px;
    color: f.color('neutral', 'white');
    border-radius: 2px;
  }
`

const StyledInput = styled.input<StyledCheckboxProps>`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:hover ~ ${StyledCheckmark}, &:active ~ ${StyledCheckmark} {
    border: 1px solid ${color('action', '500')};
    outline: none;
    box-shadow: 0 0 0 ${CHECKBOX_FOCUS_WIDTH} ${color('action', '500')};
    transition: all ${CHECKBOX_ANIMATION_TIMING};
  }

  &:checked ~ ${StyledCheckmark} {
    background-color: ${color('action', '600')};
    border: 1px solid ${color('action', '600')};
    text-align: center;
  }

  &:checked ~ ${StyledCheckmark}:after {
    display: block;
  }

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      ~ ${StyledCheckmark} {
        background-color: ${color('neutral', '000')};
        border: 1px solid ${color('neutral', '100')};
      }

      &:hover ~ ${StyledCheckmark}, input:active ~ ${StyledCheckmark} {
        border: 1px solid ${color('neutral', '100')};
        box-shadow: none;
        cursor: not-allowed;
      }
    `}
`

const StyledCheckbox = styled.div<StyledCheckboxProps>`
  display: block;
  position: relative;
  padding-left: ${spacing('11')};
  font-size: ${fontSize('base')};
  user-select: none;

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      ${StyledLabel} {
        cursor: not-allowed;
        color: ${color('neutral', '200')};
      }
    `}

  ${({ $isInvalid }) =>
    $isInvalid &&
    css`
      color: ${color('danger', '700')};
      margin: ${spacing('4')} ${spacing('6')};
      font-size: ${fontSize('base')};
    `}

  .rn-form & {
    padding-top: ${spacing('6')};
    padding-bottom: ${spacing('6')};
  }
`

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className = '',
      id = uuidv4(),
      checked,
      defaultChecked,
      isChecked,
      isDisabled,
      label,
      name,
      onBlur,
      onChange,
      value,
      isInvalid,
      ...rest
    },
    ref
  ) => {
    logger.warn(
      '`isChecked` prop has been deprecated, use `checked` and `defaultChecked`'
    )

    return (
      <StyledCheckbox
        $isDisabled={isDisabled}
        $isInvalid={isInvalid}
        className={className}
        data-testid="container"
      >
        <StyledOuterWrapper>
          <StyledLabel htmlFor={id} data-testid="label">
            <StyledInput
              $isDisabled={isDisabled}
              ref={ref}
              id={id}
              type="checkbox"
              name={name}
              value={value}
              defaultChecked={isChecked || defaultChecked}
              onChange={onChange}
              onBlur={onBlur}
              disabled={isDisabled}
              checked={checked}
              {...rest}
              data-testid="checkbox"
            />
            <StyledCheckmark />
            {label}
          </StyledLabel>
        </StyledOuterWrapper>
      </StyledCheckbox>
    )
  }
)

Checkbox.displayName = 'Checkbox'
