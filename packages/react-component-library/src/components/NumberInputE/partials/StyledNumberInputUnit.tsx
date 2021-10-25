import { selectors } from '@defencedigital/design-tokens'
import styled from 'styled-components'

const { fontSize } = selectors

interface StyledNumberInputUnitProps {
  $left: string
  $top: string
}

export const StyledNumberInputUnit = styled.span<StyledNumberInputUnitProps>`
  align-items: center;
  display: flex;
  height: 100%;
  position: absolute;
  font-size: ${fontSize('base')};
  left: ${({ $left }) => $left};
  top: ${({ $top }) => $top};
  pointer-events: none;
  user-select: none;
`
