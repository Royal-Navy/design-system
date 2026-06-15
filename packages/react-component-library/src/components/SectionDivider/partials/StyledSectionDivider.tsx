import styled from 'styled-components'
import { color } from '@royalnavy/design-tokens'

export const StyledSectionDivider = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    'icon title'
    'description description';
  row-gap: 8px;
  border-bottom: 1px solid ${color('neutral', '100')};
  padding: 8px 0;
`
