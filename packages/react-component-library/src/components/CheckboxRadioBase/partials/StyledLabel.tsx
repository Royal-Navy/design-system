import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color, fontSize } = selectors

interface StyledLabelProps {
  $hasContainer?: boolean
  $hasDescription?: boolean
}

export const StyledLabel = styled.label<StyledLabelProps>`
  color: ${color('neutral', '400')};
  font-size: ${fontSize('m')};
  pointer-events: none;
  padding: 4px;

  ${({ $hasContainer }) =>
    $hasContainer &&
    css`
      padding: 0px 12px 0 0;
    `}

  ${({ $hasDescription }) =>
    $hasDescription &&
    css`
      padding: 12px 12px 12px 0;
    `}
`
