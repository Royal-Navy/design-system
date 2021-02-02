import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing, fontSize } = selectors

export const StyledInput = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: ${spacing('10')} ${spacing('6')} ${spacing('2')};
  border: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  font-size: ${fontSize('base')};

  &:focus {
    outline: 0;
  }
`
