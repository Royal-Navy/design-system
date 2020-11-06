import React, { TextareaHTMLAttributes } from 'react'
import { selectors } from '@royalnavy/design-tokens'
import styled, { css } from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

import { hasClass } from '../../helpers'
import { useFocus } from '../../hooks/useFocus'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import { useInputValue } from '../../hooks/useInputValue'
import { InputValidationProps } from '../../common/InputValidationProps'

const { color, fontSize, spacing } = selectors

export interface TextAreaInputProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    ComponentWithClass,
    InputValidationProps {
  isDisabled?: boolean
  footnote?: string
  label?: string
  onBlur?: (event: React.FormEvent) => void
  value?: string
}

const StyledTextArea = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  padding: 0;
  border: 0;
  vertical-align: top;
  width: 100%;
`

interface StyledTextAreaWrapperProps {
  $hasFocus: boolean
  $isInvalid: boolean
}

const StyledTextAreaWrapper = styled.div<StyledTextAreaWrapperProps>`
  background: ${color('neutral', 'white')};
  border: ${spacing('px')} solid ${color('neutral', '200')};
  border-radius: 4px;
  transition: border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  position: relative;

  ${({ $hasFocus }) =>
    $hasFocus &&
    css`
      box-shadow: 0 0 0 ${spacing('px')} ${color('action', '600')};
      border: ${spacing('px')} solid ${color('action', '600')};
      background: ${color('neutral', 'white')};
    `}

  ${({ $isInvalid }) =>
    $isInvalid &&
    css`
      border-color: ${color('danger', '700')};
      box-shadow: 0 0 0 1px ${color('danger', '700')};
    `}
`

interface StyledTextAreaLabelProps {
  $hasContent: boolean
  $hasFocus: boolean
}

const StyledTextAreaLabel = styled.label<StyledTextAreaLabelProps>`
  display: block;
  position: absolute;
  padding-bottom: ${spacing('2')};
  top: 0;
  left: 0;
  transform-origin: top left;
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  pointer-events: none;
  color: ${color('neutral', '400')};
  font-size: ${fontSize('s')};
  background-color: white;
  border-radius: 3px 3px 0 0;

  ${({ $hasContent, $hasFocus }) => {
    if ($hasContent || $hasFocus) {
      return css`
        transform: translate(${spacing('6')}, 6px) scale(0.8);
      `
    }

    return css`
      transform: translate(${spacing('6')}, ${spacing('6')}) scale(1);
    `
  }}
`

const StyledTextAreaLabelInner = styled.span<StyledTextAreaLabelProps>`
  display: inline-block;
  transform-origin: top left;
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

  ${({ $hasContent, $hasFocus }) => {
    if ($hasContent || $hasFocus) {
      return css`
        transform: none;
      `
    }

    return css`
      transform: translate(0, ${spacing('2')}) scale(1.2);
    `
  }}
`

interface StyledTextAreaInputProps {
  $hasLabel: boolean
}

const StyledTextAreaInput = styled.textarea<StyledTextAreaInputProps>`
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  border: 0;
  background: none;
  font-size: ${fontSize('base')};
  resize: vertical;
  overflow: auto;
  min-height: 80px;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: 0;
  }

  ${({ $hasLabel }) => {
    if ($hasLabel) {
      return css`
        padding: ${spacing('10')} ${spacing('6')} ${spacing('2')};
      `
    }

    return css`
      padding: ${spacing('6')};
    `
  }}
`

export const TextArea: React.FC<TextAreaInputProps> = (props) => {
  const {
    className = '',
    isDisabled = false,
    footnote,
    id = uuidv4(),
    label,
    name,
    onBlur,
    onChange,
    placeholder = '',
    value,
    ...rest
  } = props

  const { focus, onLocalBlur, onFocus } = useFocus(onBlur)
  const { committedValue, hasValue, onValueChange } = useInputValue(value)
  const hasLabel = !!(label && label.length)

  return (
    <StyledTextArea className={className} data-testid="textarea-container">
      <StyledTextAreaWrapper
        $hasFocus={focus}
        $isInvalid={hasClass(className, 'is-invalid')}
      >
        {hasLabel && (
          <StyledTextAreaLabel
            $hasContent={hasValue}
            $hasFocus={focus}
            data-testid="textarea-label"
            htmlFor={id}
          >
            <StyledTextAreaLabelInner $hasContent={hasValue} $hasFocus={focus}>
              {label}
            </StyledTextAreaLabelInner>
          </StyledTextAreaLabel>
        )}
        <StyledTextAreaInput
          $hasLabel={hasLabel}
          data-testid="textarea-input"
          disabled={isDisabled}
          id={id}
          name={name}
          onBlur={onLocalBlur}
          onChange={(e) => {
            onValueChange(e)
            if (onChange) {
              onChange(e)
            }
          }}
          onFocus={onFocus}
          placeholder={placeholder}
          value={committedValue}
          {...rest}
        />
      </StyledTextAreaWrapper>
      {footnote && <small data-testid="textarea-footnote">{footnote}</small>}
    </StyledTextArea>
  )
}

TextArea.displayName = 'TextArea'
