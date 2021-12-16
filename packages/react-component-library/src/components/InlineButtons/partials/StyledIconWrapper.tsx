import styled, { css } from 'styled-components'

import { COMPONENT_SIZE, ComponentSizeType } from '../../Forms'

interface StyledIconWrapperProps {
  $size?: ComponentSizeType
}

export const StyledIconWrapper = styled.div<StyledIconWrapperProps>`
  border-radius: 8px;
  display: flex;
  margin: auto 9px;
  padding: 5px;

  ${({ $size }) =>
    $size === COMPONENT_SIZE.SMALL &&
    css`
      border-radius: 3px;
      margin: auto 6px;

      & > svg {
        height: 12px;
        width: 12px;
      }
    `}
`
