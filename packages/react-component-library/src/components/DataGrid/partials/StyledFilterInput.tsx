import styled from 'styled-components'
import { color, spacing } from '@royalnavy/design-tokens'

export const StyledFilterInput = styled.input`
  width: calc(100% - ${spacing('8')});
  padding: 4px 8px;
  border: 1px solid ${color('neutral', '200')};
  border-radius: 4px;
  font-size: 14px;
  margin: ${spacing('4')};

  &:focus-visible {
    outline: 2px solid ${color('action', '500')};
    border-color: transparent;
  }
`
