import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { color } = selectors

export const StyledCloseButton = styled.button`
  background: ${color('neutral', '000')};
  border-radius: 1000px;
  border: 1px transparent;
  cursor: pointer;

  &:hover,
  &:focus {
    background: ${color('neutral', '100')};
    outline: 0;
  }
`
