import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { ComponentSizeType } from '../../components/Forms'

const { color, fontSize } = selectors

export interface StyledLabelProps {
  $hasContent: boolean
  $hasFocus: boolean
  $size?: ComponentSizeType
}

export const StyledLabel = styled.label<StyledLabelProps>`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: top left;
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  pointer-events: none;
  color: ${color('neutral', '400')};
  font-size: ${fontSize('m')};
`
