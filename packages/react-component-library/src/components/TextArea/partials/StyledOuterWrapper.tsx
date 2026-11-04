import { styled, css } from 'styled-components'

import { COMPONENT_SIZE } from '../../Forms'
import {
  StyledOuterWrapper as StyledOuterWrapperBase,
  StyledOuterWrapperProps,
} from '../../../styled-components'
import { StyledLabel } from './StyledLabel'

const OUTER_WRAPPER_PADDING = {
  [COMPONENT_SIZE.FORMS]: '19px 8px 8px 8px',
  [COMPONENT_SIZE.SMALL]: '15px 6px 6px 6px',
}

export const StyledOuterWrapper = styled(
  StyledOuterWrapperBase
)<StyledOuterWrapperProps>`
  position: relative;
  padding: ${({ $size = COMPONENT_SIZE.FORMS }) =>
    OUTER_WRAPPER_PADDING[$size]};

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      ${StyledLabel} {
        background-color: transparent;
      }
    `}
`
