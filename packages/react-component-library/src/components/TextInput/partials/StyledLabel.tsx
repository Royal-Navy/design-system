import { selectors } from '@defencedigital/design-tokens'
import styled, { css } from 'styled-components'

import { COMPONENT_SIZE, ComponentSizeType } from '../../Forms'
import { isIE11 } from '../../../helpers'
import {
  StyledLabel as StyledLabelBase,
  StyledLabelProps,
} from '../../../styled-components/partials/StyledLabel'

const { fontSize } = selectors

function getYPosition($size: ComponentSizeType) {
  if ($size === COMPONENT_SIZE.SMALL) {
    return isIE11() ? '8px' : '6px'
  }

  return isIE11() ? '15px' : '13px'
}

export const StyledLabel = styled(StyledLabelBase)<StyledLabelProps>`
  padding-left: 11px;
  padding-right: 7px;

  ${({ $size = COMPONENT_SIZE.FORMS }) => css`
    padding-top: ${getYPosition($size)};
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
