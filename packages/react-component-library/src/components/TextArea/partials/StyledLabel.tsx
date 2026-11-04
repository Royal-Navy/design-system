import { styled, css } from 'styled-components'
import { fontSize, spacing } from '@royalnavy/design-tokens'

import { COMPONENT_SIZE } from '../../Forms'
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

  ${({ $hasFocus, $hasContent, $size }) =>
    $size === COMPONENT_SIZE.SMALL &&
    css`
      padding-left: 8px;
      padding-top: 7px;
      font-size: ${fontSize('base')};

      ${($hasFocus || $hasContent) &&
      css`
        padding-top: 3px;
        font-size: ${fontSize('xs')};
      `}
    `}
`
