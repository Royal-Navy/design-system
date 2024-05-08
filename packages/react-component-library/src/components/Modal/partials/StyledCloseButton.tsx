import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { color } = selectors

export const StyledCloseButton = styled.button`
  display: inline-flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  padding: unset;
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
