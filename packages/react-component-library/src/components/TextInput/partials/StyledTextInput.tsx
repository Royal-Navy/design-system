import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { StyledOuterWrapper } from './StyledOuterWrapper'
import { StyledLabel } from './StyledLabel'
import { StyledInput } from './StyledInput'

interface StyledTextInputProps {
  $hasFocus?: boolean
  $hasContent?: boolean
  $noLabel?: boolean
}

const { spacing, color } = selectors

export const StyledTextInput = styled.div<StyledTextInputProps>`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  margin: ${spacing('6')} 0;
  padding: 0;
  border: 0;
  vertical-align: top;
  width: 100%;

  ${({ $hasFocus }) =>
    $hasFocus &&
    css`
      ${StyledOuterWrapper} {
        box-shadow: 0 0 0 1px ${color('action', '600')};
        border: 1px solid ${color('action', '600')};
        background: ${color('neutral', 'white')};
      }
    `}

  &.is-invalid ${StyledOuterWrapper} {
    border-color: ${color('danger', '700')};
    box-shadow: 0 0 0 1px ${color('danger', '700')};
  }

  &.is-valid ${StyledOuterWrapper} {
    border-color: ${color('success', '700')};
    box-shadow: 0 0 0 1px ${color('success', '700')};
  }

  ${({ $hasFocus, $hasContent }) =>
    ($hasFocus || $hasContent) &&
    css`
      ${StyledLabel} {
        transform: translate(${spacing('6')}, 6px) scale(0.8);
      }
    `}

  ${({ $noLabel }) =>
    $noLabel &&
    css`
      ${StyledInput} {
        padding: ${spacing('6')};
      }
    `}
`
