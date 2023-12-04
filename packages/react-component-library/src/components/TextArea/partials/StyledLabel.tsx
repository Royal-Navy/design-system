import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import {
  StyledLabel as StyledLabelBase,
  StyledLabelProps,
} from '../../../styled-components/partials/StyledLabel'

const { fontSize, spacing } = selectors

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
