import { styled, css } from 'styled-components'

import { ComponentSizeType } from '../../Forms'
import { TEXT_INPUT_INPUT_HEIGHT } from '../../TextInput/partials/StyledInput'
import { CONTAINER_BORDER_RADIUS } from '../constants'

interface StyledInnerWrapperProps {
  $hasContainer?: boolean
  $size: ComponentSizeType
}

export const StyledInnerWrapper = styled.div<StyledInnerWrapperProps>`
  display: inline-flex;
  align-items: center;
  flex-direction: row;
  border-radius: ${({ $size }) => CONTAINER_BORDER_RADIUS[$size]};

  &:active {
    pointer-events: none;
  }

  ${({ $hasContainer, $size }) =>
    $hasContainer &&
    css`
      min-height: ${TEXT_INPUT_INPUT_HEIGHT[$size]};
    `}
`
