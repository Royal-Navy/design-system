import { selectors } from '@royalnavy/design-tokens'
import { css } from 'styled-components'

const { color, spacing } = selectors

export interface StyledOuterWrapperProps {
  $hasFocus?: boolean
  $isInvalid?: boolean
  $isValid?: boolean
}

function getBorderColor(
  { $hasFocus, $isInvalid, $isValid }: StyledOuterWrapperProps,
  borderColorDefault: string
) {
  if ($hasFocus) {
    return color('action', '600')
  }

  if ($isInvalid) {
    return color('danger', '600')
  }

  if ($isValid) {
    return color('success', '600')
  }

  return borderColorDefault
}

function getOuterWrapperBorder(props: StyledOuterWrapperProps) {
  return css`
    border-radius: 4px;
    border: ${spacing('px')} solid
      ${getBorderColor(props, color('neutral', '200'))};
    box-shadow: 0 0 0 ${spacing('px')} ${getBorderColor(props, 'transparent')};
    transition: border-color 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  `
}

export { getOuterWrapperBorder }
