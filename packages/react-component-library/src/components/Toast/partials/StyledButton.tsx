import styled from 'styled-components'
import { color, fontSize, spacing } from '@royalnavy/design-tokens'

export const StyledButton = styled.button`
  background: none;
  border: none;
  color: ${color('neutral', '400')};
  font-size: ${fontSize('base')};
  font-weight: 500;
  margin: 0;
  padding: ${spacing('6')} ${spacing('6')};
  cursor: pointer;

  &:hover {
    color: ${color('neutral', '400')};
    background-color: ${color('neutral', '000')};
  }
`
