import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, fontSize, spacing } = selectors

export const StyledToastButton = styled.button`
  background: none;
  border: none;
  color: ${color('neutral', '400')};
  font-size: ${fontSize('base')};
  font-weight: 500;
  margin: 0;
  padding: ${spacing('6')} ${spacing('6')};

  &:hover {
    color: ${color('neutral', '400')};
    background-color: ${color('neutral', '000')};
  }
`
