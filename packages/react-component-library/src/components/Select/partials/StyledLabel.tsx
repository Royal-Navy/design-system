import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { color, fontSize, spacing } = selectors

export const StyledLabel = styled.label`
  display: block;
  font-size: ${fontSize('base')};
  color: ${color('neutral', '400')};
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: top left;
  transform: translate(${spacing('6')}, ${spacing('6')}) scale(1);
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
`
