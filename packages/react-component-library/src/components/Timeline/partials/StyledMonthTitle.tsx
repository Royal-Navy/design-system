import styled from 'styled-components'
import { color, fontSize, spacing } from '@royalnavy/design-tokens'

export const StyledMonthTitle = styled.span`
  font-size: ${fontSize('xl')};
  font-weight: 600;
  color: ${color('neutral', '600')};
  padding-left: ${spacing('8')};
`
