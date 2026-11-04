import { styled } from 'styled-components'
import { color, fontSize } from '@royalnavy/design-tokens'

import { COMPONENT_SIZE, ComponentSizeType } from '../../Forms'

const TEXT_AREA_FONT_SIZE = {
  [COMPONENT_SIZE.FORMS]: fontSize('m'),
  [COMPONENT_SIZE.SMALL]: fontSize('base'),
}

const TEXT_AREA_MIN_HEIGHT = {
  [COMPONENT_SIZE.FORMS]: '80px',
  [COMPONENT_SIZE.SMALL]: '60px',
}

interface StyledInputProps {
  $size: ComponentSizeType
}

export const StyledInput = styled.textarea<StyledInputProps>`
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  border: 0;
  background: none;
  color: ${color('neutral', '600')};
  font-size: ${({ $size }) => TEXT_AREA_FONT_SIZE[$size]};
  resize: vertical;
  overflow: auto;
  min-height: ${({ $size }) => TEXT_AREA_MIN_HEIGHT[$size]};

  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: 0;
  }
`
