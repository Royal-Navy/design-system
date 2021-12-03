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
  margin-top: 14px;
  font-size: ${fontSize('s')};
  color: ${color('neutral', '400')};
  text-align: center;
  margin-left: ${({ $marginLeft }) => $marginLeft};
  width: ${({ $width }) => $width};
  left: ${({ $left }) => $left};
`
