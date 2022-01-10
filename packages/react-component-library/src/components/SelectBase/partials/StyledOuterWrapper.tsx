import styled, { css } from 'styled-components'

import { COMPONENT_SIZE } from '../../Forms'
import {
  BORDER_RADIUS,
  StyledOuterWrapper as StyledOuterWrapperBase,
  StyledOuterWrapperProps,
} from '../../../styled-components/partials/StyledOuterWrapper'

export const StyledOuterWrapper = styled(
  StyledOuterWrapperBase
)<StyledOuterWrapperProps>`
  display: inline-flex;
  flex-direction: row;

  ${({ $hasFocus, $size = COMPONENT_SIZE.FORMS }) => {
    if ($hasFocus) {
      return css`
        border-radius: ${BORDER_RADIUS[$size]} ${BORDER_RADIUS[$size]} 0 0;
        box-shadow: unset;
      `
    }

    return null
  }}
`
