import styled from 'styled-components'
import { color, fontSize } from '@royalnavy/design-tokens'

interface StyledLabelProps {
  $marginLeft: string
  $width: string
  $left: string
}

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
