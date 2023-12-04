import { selectors } from '@royalnavy/design-tokens'
import styled, { css } from 'styled-components'

import { COMPONENT_SIZE } from '../../Forms'
import {
  StyledLabel as StyledLabelBase,
  StyledLabelProps,
} from '../../../styled-components/partials/StyledLabel'

const { fontSize } = selectors

export const StyledLabel = styled(StyledLabelBase)<StyledLabelProps>`
  display: inline-flex;
  height: 100%;
  align-items: center;
  padding-left: 11px;
  padding-right: 7px;

  ${({ $hasFocus, $hasContent, $size = COMPONENT_SIZE.FORMS }) => css`
    ${$size === COMPONENT_SIZE.FORMS &&
    ($hasContent || $hasFocus) &&
    `
      height: 18px;
      margin-top: 2px;
      font-size: ${fontSize('s')}
    `}

    ${$size === COMPONENT_SIZE.SMALL &&
    ($hasContent || $hasFocus) &&
    `
      display: none;
    `}
  `}
`
