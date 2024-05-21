import styled from 'styled-components'
import { color, spacing } from '@royalnavy/design-tokens'

export const StyledItem = styled.span`
  display: flex;
  border-bottom: 1px solid ${color('neutral', '600')};
  margin: ${spacing('6')};
  padding-bottom: ${spacing('6')};
`
