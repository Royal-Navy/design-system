import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color } = selectors

export const StyledSectionDivider = styled.div`
  border-bottom: 1px solid ${color('neutral', '100')};
  padding: 8px 0;
`
