import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, fontSize, spacing } = selectors

export const StyledMonthTitle = styled.span`
  font-size: ${fontSize('xl')};
  font-weight: 600;
  color: ${color('neutral', '600')};
  padding-left: ${spacing('8')};
`
