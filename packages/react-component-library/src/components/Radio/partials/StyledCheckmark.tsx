import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color } = selectors

interface StyledCheckmarkProps {
  $hasContainer?: boolean
}

export const StyledCheckmark = styled.div<StyledCheckmarkProps>`
  position: absolute;
  top: ${({ $hasContainer }) => ($hasContainer ? '13px' : '4px')};
  left: ${({ $hasContainer }) => ($hasContainer ? '12px' : '4px')};
  height: 16px;
  width: 16px;
  border-radius: 999px;
  border: 1px solid ${color('neutral', '200')};
  outline: none;

  &::after,
  &::before {
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 999px;
    position: absolute;
    display: none;
  }
`
