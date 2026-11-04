import { styled } from 'styled-components'
import { fontSize } from '@royalnavy/design-tokens'

import { COMPONENT_SIZE, ComponentSizeType } from '../../Forms'

const DESCRIPTION_FONT_SIZE = {
  [COMPONENT_SIZE.FORMS]: fontSize('base'),
  [COMPONENT_SIZE.SMALL]: fontSize('s'),
}

interface StyledDescriptionProps {
  $size: ComponentSizeType
}

export const StyledDescription = styled.div<StyledDescriptionProps>`
  font-size: ${({ $size }) => DESCRIPTION_FONT_SIZE[$size]};
  margin-top: 4px;
`
