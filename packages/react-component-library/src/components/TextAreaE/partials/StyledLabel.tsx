import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { isIE11 } from '../../../helpers'
import {
  StyledLabel as StyledLabelBase,
  StyledLabelProps,
} from '../../../styled-components/partials/StyledLabel'

const { color, spacing } = selectors

export const StyledLabel = styled(StyledLabelBase)<StyledLabelProps>`
  padding-bottom: ${spacing('2')};
  pointer-events: none;
  background-color: ${color('neutral', 'white')};
  border-radius: 3px 3px 0 0;

  transform: translate(10px, ${isIE11() ? '9px' : '11px'}) scale(1);

  ${({ $hasFocus, $hasContent }) =>
    ($hasFocus || $hasContent) &&
    css`
      transform: translate(10px, ${isIE11() ? '6px' : '4px'}) scale(0.75);
    `}
`
