import { styled } from 'styled-components'
import { themeColor, fontSize, spacing } from '@royalnavy/design-tokens'

export const StyledMonthTitle = styled.span`
  font-size: ${fontSize('xl')};
  font-weight: 600;
  color: ${themeColor('neutral', '600')};
  padding-left: ${spacing('8')};
`
