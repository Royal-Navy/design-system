import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color } = selectors

const DEFAULT_BORDER = css`
  border: 1px solid ${color('neutral', '200')};
`

export interface StyledOuterWrapperProps {
  $hasFocus?: boolean
  $isDisabled?: boolean
  $isInvalid?: boolean
}

function getBoxShadowColor({ $hasFocus }: StyledOuterWrapperProps) {
  if ($hasFocus) {
    return color('action', '100')
  }

  return 'transparent'
}

function getBorder({
  $hasFocus,
  $isDisabled,
  $isInvalid,
}: StyledOuterWrapperProps) {
  if ($hasFocus) {
    return css`
      border: 3px solid ${color('action', '500')};
    `
  }

  if ($isDisabled) {
    return css`
      border: 1px solid transparent;
    `
  }

  if ($isInvalid) {
    return css`
      border: 3px solid ${color('danger', '800')};
    `
  }

  return null
}

function getMargin({ $hasFocus, $isInvalid }: StyledOuterWrapperProps) {
  if ($hasFocus || $isInvalid) {
    return css`
      margin: -2px;
    `
  }

  return null
}

function getBackgroundColor({ $isDisabled }: StyledOuterWrapperProps) {
  return css`
    background-color: ${$isDisabled
      ? color('neutral', '000')
      : color('neutral', 'white')};
  `
}

export const StyledOuterWrapper = styled.div<StyledOuterWrapperProps>`
  ${(props) => {
    return css`
      ${getBackgroundColor(props)};
      ${getBorder(props) || DEFAULT_BORDER};
      ${getMargin(props)};
      border-radius: 15px;
      box-shadow: 0 0 0 3px ${getBoxShadowColor(props)};
      transition: border-color 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    `
  }}
`
