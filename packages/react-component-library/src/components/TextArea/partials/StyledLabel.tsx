import styled, { css } from 'styled-components'
import { fontSize, spacing } from '@royalnavy/design-tokens'

import {
  StyledLabel as StyledLabelBase,
  StyledLabelProps,
} from '../../../styled-components/partials/StyledLabel'

export const StyledLabel = styled(StyledLabelBase)<StyledLabelProps>`
  padding-bottom: ${spacing('2')};
  padding-left: 10px;
  padding-right: 7px;
  padding-top: 11px;
  pointer-events: none;
  border-radius: 3px 3px 0 0;

  ${({ $hasFocus, $hasContent }) =>
    ($hasFocus || $hasContent) &&
    css`
      padding-top: 4px;
      font-size: ${fontSize('s')};
    `}
`
