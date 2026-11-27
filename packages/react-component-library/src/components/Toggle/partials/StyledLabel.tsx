import { styled } from 'styled-components'
import { color, fontSize } from '@royalnavy/design-tokens'

import { COMPONENT_SIZE, ComponentSizeType } from '../../Forms'
import { StyledInput } from './StyledInput'

const LABEL_FONT_SIZE = {
  [COMPONENT_SIZE.FORMS]: fontSize('m'),
  [COMPONENT_SIZE.SMALL]: fontSize('base'),
}

interface StyledLabelProps {
  $size: ComponentSizeType
}

export const StyledLabel = styled.span<StyledLabelProps>`
  color: ${color('neutral', '400')};
  font-size: ${({ $size }) => LABEL_FONT_SIZE[$size]};

  ${StyledInput}:disabled ~ & {
    color: ${color('neutral', '300')};
  }
`
