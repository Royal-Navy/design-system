import styled from 'styled-components'
import { spacing } from '@royalnavy/design-tokens'

export const StyledColButton = styled.button`
  border: unset;
  background: unset;
  padding: unset;
  cursor: pointer;
  padding: 0 ${spacing('3')};
  margin-left: auto;

  &:hover {
    opacity: 0.75;
  }
`
