import { selectors } from '@defencedigital/design-tokens'
import styled, { css } from 'styled-components'

import { COMPONENT_SIZE } from '../../Forms'
import {
  StyledLabel as StyledLabelBase,
  StyledLabelProps,
} from '../../../styled-components/partials/StyledLabel'

const { fontSize } = selectors

export const StyledLabel = styled(StyledLabelBase)<StyledLabelProps>`
  padding-left: 11px;
  padding-right: 7px;

  ${({ $size = COMPONENT_SIZE.FORMS }) => css`
    padding-top: ${$size === COMPONENT_SIZE.SMALL ? '6px' : '13px'};
  `}

  ${({ $hasContent, $hasFocus, $size }) => {
    if (!$hasContent && !$hasFocus) {
      return null
    }

    if ($size === COMPONENT_SIZE.SMALL) {
      return css`
        display: none;
      `
    }

    return css`
      padding-top: 6px;
      font-size: ${fontSize('s')};
    `
  }}
`
