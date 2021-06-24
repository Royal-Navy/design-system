import { selectors } from '@royalnavy/design-tokens'
import { css } from 'styled-components'

const { color } = selectors

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
    return css`3px solid ${color('action', '500')}`
  }

  if ($isDisabled) {
    return css`1px solid transparent`
  }

  if ($isInvalid) {
    return css`3px solid ${color('danger', '800')}`
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

function getOuterWrapperBorder(props: StyledOuterWrapperProps) {
  const defaultBorder = css`1px solid ${color('neutral', '200')}`

  return css`
    border: ${getBorder(props) || defaultBorder};
    border-radius: 15px;
    box-shadow: 0 0 0 3px ${getBoxShadowColor(props)};
    transition: border-color 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    ${getMargin(props)}
  `
}

export { getOuterWrapperBorder }
