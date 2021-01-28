import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

interface StyledOptionProps {
  $isActive?: boolean
}

const { spacing, color } = selectors

export const StyledOption = styled.label<StyledOptionProps>`
  cursor: pointer;
  border-radius: 3px;
  display: inline-block;
  width: auto;
  height: auto;
  line-height: 1;
  padding: ${spacing('5')} ${spacing('8')};
  font-size: inherit;
  color: ${color('neutral', '400')};
  position: relative;
  z-index: 0;
  transition: all 0.3s;
  margin: 0 ${spacing('px')};

  ${({ $isActive }) =>
    $isActive &&
    css`
      background-color: ${color('neutral', '400')};
      color: ${color('neutral', 'white')};
    `}

  &:hover {
    color: ${color('neutral', 'white')};
    background-color: ${color('neutral', '400')};
  }
`
