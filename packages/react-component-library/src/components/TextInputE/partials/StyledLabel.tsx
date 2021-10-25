import styled, { css } from 'styled-components'

import { COMPONENT_SIZE, ComponentSizeType } from '../../Forms'
import { isIE11 } from '../../../helpers'
import {
  StyledLabel as StyledLabelBase,
  StyledLabelProps,
} from '../../../styled-components/partials/StyledLabel'

function getYPosition($size: ComponentSizeType) {
  if ($size === COMPONENT_SIZE.SMALL) {
    return isIE11() ? '8px' : '6px'
  }

  return isIE11() ? '15px' : '13px'
}

export const StyledLabel = styled(StyledLabelBase)<StyledLabelProps>`
  ${({ $size }) => css`
    transform: translate(11px, ${getYPosition($size)}) scale(1);
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
      transform: translate(11px, 8px) scale(0.75);
    `
  }}
`
