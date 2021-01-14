import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, spacing, fontSize } = selectors

export const StyledDrawerButton = styled.button`
  position: absolute;
  top: ${spacing('2')};
  right: ${spacing('2')};
  border: none;
  font-size: ${fontSize('l')};
  color: ${color('neutral', '300')};
  background-color: ${color('neutral', 'white')};

  &:hover {
    color: ${color('neutral', '500')};
    cursor: pointer;
  }
`
