import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color, spacing } = selectors

export const StyledItem = styled.span`
  display: flex;
  border-bottom: 1px solid ${color('neutral', '600')};
  margin: ${spacing('6')};
  padding-bottom: ${spacing('6')};
`
