import styled from 'styled-components'
import { colorByMode, fontSize, Theme } from '@royalnavy/design-tokens'

export const StyledError = styled.span`
  display: inline-block;
  font-size: ${fontSize('s')};
  color: ${({ theme }) => colorByMode('danger', '800', '900', theme as Theme)};
  margin: 0 0 6px 12px;
`
