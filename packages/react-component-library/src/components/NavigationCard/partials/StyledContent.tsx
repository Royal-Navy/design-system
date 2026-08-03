import { spacing } from '@royalnavy/design-tokens'
import styled from 'styled-components'

export const StyledContent = styled.span`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${spacing('2')};
  min-width: 0;
`
