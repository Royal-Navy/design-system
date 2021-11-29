import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { COMPONENT_SIZE } from '../../Forms'
import {
  BORDER_RADIUS,
  BORDER_WIDTH,
  StyledOuterWrapper as StyledOuterWrapperBase,
  StyledOuterWrapperProps,
} from '../../../styled-components/partials/StyledOuterWrapper'

const { color } = selectors

export const StyledOuterWrapper = styled(
  StyledOuterWrapperBase
)<StyledOuterWrapperProps>`
  display: inline-flex;
  flex-direction: row;

  ${({ $hasFocus, $size = COMPONENT_SIZE.FORMS }) => {
    if ($hasFocus) {
      return css`
        border-bottom: none;
        /* Prevents black border issue */
        border-bottom-color: ${color('action', '500')};
        border-radius: ${BORDER_RADIUS[$size]} ${BORDER_RADIUS[$size]} 0 0;
        box-shadow: unset;
        padding-bottom: ${BORDER_WIDTH[$size]};
      `
    }

    return null
  }}
`
