import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, spacing } = selectors

export const StyledItem = styled.div`
  display: flex;
  border-bottom: 1px solid ${color('neutral', '600')};
  margin: ${spacing('6')};
  padding-bottom: ${spacing('6')};
`
