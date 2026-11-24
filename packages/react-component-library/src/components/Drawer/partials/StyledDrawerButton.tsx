import { styled } from 'styled-components'
import { themeColor, spacing } from '@royalnavy/design-tokens'

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

  background: ${themeColor('neutral', '000')};
  border-radius: 1000px;
  border: 1px transparent;
  cursor: pointer;

  &:hover,
  &:focus {
    background: ${themeColor('neutral', '100')};
    outline: 0;
  }
`
