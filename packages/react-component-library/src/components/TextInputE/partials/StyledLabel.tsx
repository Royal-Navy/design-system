import styled, { css } from 'styled-components'

import { isIE11 } from '../../../helpers'
import {
  StyledLabel as StyledLabelBase,
  StyledLabelProps,
} from '../../../styled-components/partials/StyledLabel'

function getYPosition() {
  return isIE11() ? '15px' : '13px'
}

export const StyledLabel = styled(StyledLabelBase)<StyledLabelProps>`
  transform: translate(11px, ${getYPosition()}) scale(1);

  ${({ $hasFocus, $hasContent }) =>
    ($hasFocus || $hasContent) &&
    css`
      transform: translate(11px, 8px) scale(0.75);
    `}
`
