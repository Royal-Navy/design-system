import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color } = selectors

export const StyledCheckmark = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 16px;
  width: 16px;
  background-color: ${color('neutral', 'white')};
  border-radius: 999px;
  border: 1px solid ${color('neutral', '200')};

  &::after {
    content: '';
    position: absolute;
    display: none;
  }
`
