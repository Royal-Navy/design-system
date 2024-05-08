import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, spacing } = selectors

export const StyledDrawerButton = styled.button`
  position: absolute;
  top: ${spacing('4')};
  right: ${spacing('4')};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: unset;
  width: 24px;
  height: 24px;

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
