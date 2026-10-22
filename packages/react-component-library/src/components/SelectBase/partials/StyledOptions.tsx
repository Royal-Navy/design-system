import styled, { css } from 'styled-components'
import { fontSize } from '@royalnavy/design-tokens'

import { COMPONENT_SIZE, ComponentSizeType } from '../../Forms'
import { TEXT_INPUT_INPUT_HEIGHT } from '../../TextInput/partials/StyledInput'
import { StyledOption } from './StyledOption'

interface StyledOptionsProps {
  $size?: ComponentSizeType
}

export const StyledOptions = styled.ul<StyledOptionsProps>`
  max-height: 230px;
  overflow-y: auto;
  list-style-type: none;
  padding-left: 0;
  margin-left: 0;

  &:focus {
    outline: none;
  }

  ${({ $size }) =>
    $size === COMPONENT_SIZE.SMALL &&
    css`
      ${StyledOption} {
        height: ${TEXT_INPUT_INPUT_HEIGHT[COMPONENT_SIZE.SMALL]};
        font-size: ${fontSize('base')};

        & > svg {
          height: 12px;
          width: 12px;
        }
      }
    `}
`
