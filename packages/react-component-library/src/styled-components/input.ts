import { selectors } from '@defencedigital/design-tokens'
import { css } from 'styled-components'

const { color, spacing } = selectors

export interface StyledOuterWrapperProps {
  $hasFocus?: boolean
  $isInvalid?: boolean
}

function getBorderColor(
  { $hasFocus, $isInvalid }: StyledOuterWrapperProps,
  borderColorDefault: string
) {
  if ($isInvalid) {
    return color('danger', '600')
  }

  if ($hasFocus) {
    return color('action', '600')
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
