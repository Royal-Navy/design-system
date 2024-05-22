import styled from 'styled-components'
import { color, fontSize } from '@royalnavy/design-tokens'

export const StyledInput = styled.textarea`
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  border: 0;
  background: none;
  color: ${color('neutral', '600')};
  font-size: ${fontSize('m')};
  resize: vertical;
  overflow: auto;
  min-height: 80px;

  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: 0;
  }
`
