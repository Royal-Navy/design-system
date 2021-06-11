import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { isIE11 } from '../../../helpers'

const { color, fontSize } = selectors

interface StyledLabelProps {
  $hasContent: boolean
  $hasFocus: boolean
}

function getYPosition() {
  return isIE11() ? '15px' : '13px'
}

export const StyledLabel = styled.label<StyledLabelProps>`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: top left;
  transform: translate(11px, ${getYPosition()}) scale(1);
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  pointer-events: none;
  color: ${color('neutral', '400')};
  font-size: ${fontSize('m')};

  ${({ $hasFocus, $hasContent }) =>
    ($hasFocus || $hasContent) &&
    css`
      transform: translate(11px, 8px) scale(0.75);
    `}
`
