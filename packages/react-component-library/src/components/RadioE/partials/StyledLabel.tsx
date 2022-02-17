import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color, fontSize } = selectors

interface StyledLabelProps {
  $hasContainer?: boolean
}

export const StyledLabel = styled.label<StyledLabelProps>`
  color: ${color('neutral', '400')};
  font-size: ${fontSize('m')};
  padding: ${({ $hasContainer }) =>
    $hasContainer ? '12px 12px 12px 17px' : '3px'};
  pointer-events: none;
`
