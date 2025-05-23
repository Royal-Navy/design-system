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

  // Override default styles to fix the slow border fade
  // when the dropdown is visible
  transition: border-color 10ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 10ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

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
