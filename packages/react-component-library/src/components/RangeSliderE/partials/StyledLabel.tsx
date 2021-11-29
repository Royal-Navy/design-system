import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

interface StyledLabelProps {
  $marginLeft: string
  $width: string
  $left: string
}

const { fontSize, color } = selectors

export const StyledLabel = styled.span<StyledLabelProps>`
  position: absolute;
  margin-top: 22px;
  font-size: ${fontSize('xs')};
  color: ${color('neutral', '400')};
  text-align: center;
  margin-left: ${({ $marginLeft }) => $marginLeft};
  width: ${({ $width }) => $width};
  left: ${({ $left }) => $left};
`
